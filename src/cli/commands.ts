import {
	getConfig,
	setConfig,
	resolveRelativePath,
	getToken,
	assertHasToken,
	assertGetConfig,
	storeToken,
} from './config'
import { JSONSchema7 } from 'json-schema'
import * as fs from 'fs'
import { promisify } from 'util'
import {
	fetchTrackingPlan,
	fetchWorkspaces,
	isValidToken,
	generateToken,
	fetchAllTrackingPlans,
} from './api'
import prompts from 'prompts'
import { Arguments, Config } from './types'
import { writeTrackingPlan, loadTrackingPlan } from './trackingplans'
import { gen } from '../generators/gen'
import { RawTrackingPlan } from '../generators/gen'
import { Options, SDK, Language } from '../generators/options'

const writeFile = promisify(fs.writeFile)

export async function init(args: Arguments) {
	// Attempt to read a config, if one is available.
	const currentConfig = await getConfig(args.config)

	// If a user ctrl-c's a prompt, we should return early.
	let hasExited = false
	const promptOptions: prompts.Options = {
		onCancel: () => {
			hasExited = true
		},
	}

	// Set the config.client.sdk value.
	const sdkChoices = [
		{ title: 'analytics.js', value: 'analytics.js' },
		{ title: 'analytics-node', value: 'analytics-node' },
		{ title: 'analytics-ios', value: 'analytics-ios' },
		{ title: 'analytics-android', value: 'analytics-android', disabled: true },
	]
	const defaultSDK =
		currentConfig && sdkChoices.findIndex(({ value }) => value === currentConfig.client.sdk)
	const { sdk } = await prompts(
		{
			type: 'select',
			message: 'What SDK should the Typewriter client use?',
			name: 'sdk',
			choices: sdkChoices,
			initial: defaultSDK,
		},
		promptOptions
	)
	if (hasExited) {
		return
	}

	// Set the config.client.language value, depending on the SDK option selected.
	// We skip the language select if there is only one language option for the selected SDK.
	// For now, that means we'll only show it for our JavaScript clients.
	let language = undefined
	if (['analytics.js', 'analytics-node'].includes(sdk)) {
		const javascriptLanguageChoices = [
			{ title: 'JavaScript', value: 'javascript' },
			{ title: 'TypeScript', value: 'typescript' },
		]
		const defaultJavaScriptLanguage =
			currentConfig &&
			javascriptLanguageChoices.findIndex(({ value }) => value === currentConfig.client.language)

		const response = await prompts(
			{
				type: 'select',
				message: 'What language should the Typewriter client be generated in?',
				name: 'language',
				choices: javascriptLanguageChoices,
				initial: defaultJavaScriptLanguage,
			},
			promptOptions
		)
		if (hasExited) {
			return
		}
		language = response.language
	}

	// If there is only one language option, we will have skipped the language select,
	// so we'll need to default to the sole language option for the selected SDK.
	if (!language) {
		if (sdk === SDK.IOS) {
			language = Language.OBJECTIVE_C
		} else {
			// Unreachable, unless we add support for new SDKs but forget to update
			// the language select.
			throw new Error('No language selected.')
		}
	}

	// Request a path to write this Tracking Plan's client into.
	const { path } = await prompts(
		{
			type: 'text',
			message: 'What directory should Typewriter write this client into?',
			name: 'path',
			initial:
				currentConfig && currentConfig.trackingPlans.length > 0
					? currentConfig.trackingPlans[0].path
					: './analytics',
		},
		promptOptions
	)
	if (hasExited) {
		return
	}

	// Fetch a Segment API Token, of one isn't already available.
	let token = await getToken(currentConfig)
	if (!token) {
		const { tokenProvider } = await prompts(
			{
				type: 'select',
				message: 'How do you want to provide a Segment API Token?',
				name: 'tokenProvider',
				choices: [
					{ title: 'Generate a new token', value: 'generate' },
					{ title: 'Enter a token', value: 'type' },
				],
			},
			promptOptions
		)
		if (hasExited) {
			return
		}

		if (tokenProvider === 'type') {
			// Let a user paste in a copied token.
			const { providedToken } = await prompts(
				{
					type: 'password',
					message: 'Enter a Segment API Token:',
					name: 'providedToken',
					min: 1,
				},
				promptOptions
			)
			if (hasExited) {
				return
			}

			token = providedToken
		} else if (tokenProvider === 'generate') {
			// We'll generate a new Segment API token using the Tokens API.
			// To do that, we'll need the user's credentials and a specific
			// workspace to scope the token to.
			const { workspaceSlug, email, password } = await prompts(
				[
					{
						type: 'text',
						message: 'What workspace slug should the token have read access to?',
						name: 'workspaceSlug',
					},
					{
						type: 'text',
						message: 'What is your segment.com account email?',
						name: 'email',
					},
					{
						type: 'password',
						message: 'What is your segment.com account password?',
						name: 'password',
					},
				],
				promptOptions
			)
			if (hasExited) {
				return
			}

			token = await generateToken({
				workspaceSlug: workspaceSlug,
				email: email,
				password,
			})

			console.log('Successfully generated a new Segment API token.')
		}

		// Cache this token for future commands.
		if (token) {
			await storeToken(token)
		}
	}
	if (!token || !(await isValidToken(token))) {
		throw new Error('The provided API token is not a valid Segment token.')
	}

	// Now that we have a token, we can fetch their Tracking Plans and have the user select
	// which one to generate a Typewriter client from.
	const availableTrackingPlans = await fetchAllTrackingPlans({ token })
	if (availableTrackingPlans.length === 0) {
		console.error(`No Tracking Plans accessible from your token (${await tokenToString(token)})`)
		return
	}
	const preSelectedTrackingPlanIDs = currentConfig
		? currentConfig.trackingPlans.map(tp => tp.id)
		: []
	const { trackingPlanName } = await prompts(
		[
			{
				type: 'autocomplete',
				message: 'Which Tracking Plan should Typewriter generate clients for?',
				name: 'trackingPlanName',
				min: 1,
				choices: availableTrackingPlans
					// Sort Tracking Plans by update time, to match the Tracking Plan list view.
					.sort((a, b) => b.update_time.getTime() - a.update_time.getTime())
					.map(tp => ({
						title: tp.display_name,
						value: tp.name,
						selected: preSelectedTrackingPlanIDs.includes(tp.name.split('/').slice(-1)[0]),
					})),
			},
		],
		promptOptions
	)
	if (hasExited) {
		return
	}
	const trackingPlan = availableTrackingPlans.find(tp => tp.name === trackingPlanName)!

	const client: Options = {
		sdk,
		language,
	}
	const cfg: Config = {
		client,
		trackingPlans: [
			{
				name: trackingPlan.display_name,
				id: trackingPlan.name.split('/').slice(-1)[0],
				workspaceSlug: trackingPlan.name.replace('workspaces/', '').split('/')[0],
				path,
			},
		],
	}

	await setConfig(cfg, args.config)

	console.log("Successfully initialized Typewriter (see 'typewriter.yml')")

	// Now generate a client using the newly initialized configuration.
	console.log("Running 'npx typewriter@next' to build a typewriter client...")
	await generate(args)
}

export async function generate(args: Arguments) {
	await generateClients(args, { isDevelopment: true })
}

export async function prod(args: Arguments) {
	await generateClients(args, { isDevelopment: false })
}

export async function token(args: Arguments) {
	const cfg = await assertGetConfig(args.config)
	const token = await assertHasToken(cfg)

	console.log(token)
}

export async function update(args: Arguments) {
	const cfg = await assertGetConfig(args.config)
	const token = await assertHasToken(cfg)

	// TODO(colinking): support fine-grained event updates, by event name and by label.
	// For now, we will just support updating the full tracking plan.
	for (var config of cfg.trackingPlans) {
		const plan = await fetchTrackingPlan({
			id: config.id,
			workspaceSlug: config.workspaceSlug,
			token,
		})

		await writeTrackingPlan(args, plan, config)
	}

	console.log("Running 'npx typewriter@next' to re-build your typewriter client...")
	await generate(args)
}

// Command Helpers

// tokenToString partially redacts a token and prints a list of accessible
// workspaces to provide context on the token.
async function tokenToString(token: string) {
	const workspaces = await fetchWorkspaces({ token })
	const redactedToken = token.substring(0, 10) + '...'

	return `${redactedToken} [${workspaces.map(w => w.display_name).join(', ')}]`
}

async function generateClients(args: Arguments, { isDevelopment }: { isDevelopment: boolean }) {
	const cfg = await getConfig(args.config)

	if (!cfg) {
		throw new Error('Unable to find typewriter.yml. Try `typewriter init`')
	}

	for (var config of cfg.trackingPlans) {
		const segmentTrackingPlan = await loadTrackingPlan(args, config)
		const trackingPlan: RawTrackingPlan = {
			trackCalls: segmentTrackingPlan.rules.events.map<JSONSchema7>(e => ({
				...e.rules,
				title: e.name,
				description: e.description,
			})),
		}

		// Generate a client and write its files out to the specified path.
		const files = await gen(trackingPlan, {
			...cfg,
			// TODO: fetch from package.json
			typewriterVersion: '7.0.0',
			isDevelopment,
		})
		for (var file of files) {
			const path = await resolveRelativePath(args, 'file', config.path, file.path)
			await writeFile(path, file.contents, {
				encoding: 'utf-8',
			})
		}
	}
}