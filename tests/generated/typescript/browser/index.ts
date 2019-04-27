/**
 *  This client was automatically generated by Segment Typewriter. ** Do Not Edit **
 */

declare global {
	interface Window {
		analytics?: Segment.AnalyticsJS
	}
}

/**
 * Type definitions for Segment's analytics.js.
 */
namespace Segment {
	/** A minimal interface for Segment's analytics.js. */
	export interface AnalyticsJS {
		track: (
			event: string,
			properties?: Record<string, any>,
			options?: Options,
			callback?: Callback
		) => void
	}

	/** A dictionary of options. For example, enable or disable specific destinations for the call. */
	export interface Options {
		/**
		 * Selectivly filter destinations. By default all destinations are enabled.
		 * https://segment.com/docs/sources/website/analytics.js/#selecting-destinations
		 */
		integrations?: {
			All?: boolean
			AppsFlyer?: {
				appsFlyerId: string
			}
			[key: string]: boolean | { [key: string]: string } | undefined
		}
		/**
		 * A dictionary of extra context to attach to the call.
		 * https://segment.com/docs/spec/common/#context
		 */
		context?: Context
	}

	/**
	 * Context is a dictionary of extra information that provides useful context about a datapoint.
	 * @see {@link https://segment.com/docs/spec/common/#context}
	 */
	export interface Context extends Record<string, any> {
		active?: boolean
		app?: {
			name?: string
			version?: string
			build?: string
		}
		campaign?: {
			name?: string
			source?: string
			medium?: string
			term?: string
			content?: string
		}
		device?: {
			id?: string
			manufacturer?: string
			model?: string
			name?: string
			type?: string
			version?: string
		}
		ip?: string
		locale?: string
		location?: {
			city?: string
			country?: string
			latitude?: string
			longitude?: string
			region?: string
			speed?: string
		}
		network?: {
			bluetooth?: string
			carrier?: string
			cellular?: string
			wifi?: string
		}
		os?: {
			name?: string
			version?: string
		}
		page?: {
			hash?: string
			path?: string
			referrer?: string
			search?: string
			title?: string
			url?: string
		}
		referrer?: {
			type?: string
			name?: string
			url?: string
			link?: string
		}
		screen?: {
			density?: string
			height?: string
			width?: string
		}
		timezone?: string
		groupId?: string
		traits?: Record<string, any>
		userAgent?: string
	}

	export type Callback = () => void
}

/**
 * Type definitions for run-time validation errors.
 */
namespace RuntimeValidation {
	/** An invalid event with its associated collection of validation errors. */
	export interface InvalidEvent {
		eventName: string
		validationErrors: ValidationError[]
	}

	/**
	 * Validation error raised by AJV.js.
	 * See: https://github.com/epoberezkin/ajv
	 * Specifically: https://github.com/epoberezkin/ajv/blob/0c31c1e2a81e315511c60a0dd7420a72cb181e61/lib/ajv.d.ts#L279
	 */
	export interface ValidationError {
		keyword: string
		dataPath: string
		schemaPath: string
		params: object
		message: string
		propertyName?: string
		parentSchema?: object
		data?: any
	}
}

interface Properties {
	/**
	 * Really, don't do this.
	 */
	'0000---terrible-property-name~!3'?: any
	/**
	 * Duplicate key error in Android
	 */
	identifierId?: any
	/**
	 * AcronymStyle bug fixed in v5.0.1
	 */
	identifier_id?: any
}

/**
 * Optional array property
 */
interface Optionalarray {
	/**
	 * Optional sub-property
	 */
	'optional sub-property'?: string
	/**
	 * Required sub-property
	 */
	'required sub-property': string
}

/**
 * Optional object property
 */
interface Optionalobject {
	/**
	 * Optional sub-property
	 */
	'optional sub-property'?: string
	/**
	 * Required sub-property
	 */
	'required sub-property': string
}

/**
 * Required array property
 */
interface Requiredarray {
	/**
	 * Optional sub-property
	 */
	'optional sub-property'?: string
	/**
	 * Required sub-property
	 */
	'required sub-property': string
}

/**
 * Required object property
 */
interface Requiredobject {
	/**
	 * Optional sub-property
	 */
	'optional sub-property'?: string
	/**
	 * Required sub-property
	 */
	'required sub-property': string
}

interface Properties {
	/**
	 * Optional any property
	 */
	'optional any'?: any
	/**
	 * Optional array property
	 */
	'optional array'?: Optionalarray[]
	/**
	 * Optional array (empty) property
	 */
	'optional array (empty)'?: any[]
	/**
	 * Optional boolean property
	 */
	'optional boolean'?: boolean
	/**
	 * Optional integer property
	 */
	'optional int'?: number
	'optional nullable string'?: string | null
	/**
	 * Optional number property
	 */
	'optional number'?: number
	'optional number or string'?: number | string
	/**
	 * Optional object property
	 */
	'optional object'?: Optionalobject
	/**
	 * Optional object (empty) property
	 */
	'optional object (empty)'?: Record<string, any>
	/**
	 * Optional string property
	 */
	'optional string'?: string
	/**
	 * Optional string regex property
	 */
	'optional string regex'?: string
	/**
	 * Required any property
	 */
	'required any': any
	/**
	 * Required array property
	 */
	'required array': Requiredarray[]
	/**
	 * Required array (empty) property
	 */
	'required array (empty)': any[]
	/**
	 * Required boolean property
	 */
	'required boolean': boolean
	/**
	 * Required integer property
	 */
	'required int': number
	'required nullable string': string | null
	/**
	 * Required number property
	 */
	'required number': number
	'required number or string': number | string
	/**
	 * Required object property
	 */
	'required object': Requiredobject
	/**
	 * Required object (empty) property
	 */
	'required object (empty)': Record<string, any>
	/**
	 * Required string property
	 */
	'required string': string
	/**
	 * Required string regex property
	 */
	'required string regex': string
}

// TODO:
// Options to customize the runtime behavior of a Typewriter client.
// export interface AnalyticsOptions {
//	onError?(event: InvalidEvent): void
// }

// Helper to attach metadata on Typewriter to outbound requests.
// This is used for attribution and debugging by the Segment team.
function withTypewriterContext(options: Segment.Options = {}): Segment.Options {
	return {
		...options,
		context: {
			...(options.context || {}),
			typewriter: {
				language: 'ts',
				version: '7.0.0',
			},
		},
	}
}

/**
 * Don't do this.
 */
export function I42TerribleEventName3(
	props: Properties,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	if (window.analytics) {
		window.analytics.track(
			'42_--terrible=="event\'++name~!3',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}

/**
 * This is JSON Schema draft-04 event.
 */
export function draft04Event(
	props: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	if (window.analytics) {
		window.analytics.track(
			'Draft-04 Event',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}

/**
 * This is JSON Schema draft-06 event.
 */
export function draft06Event(
	props: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	if (window.analytics) {
		window.analytics.track(
			'Draft-06 Event',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}

/**
 * This is an empty event.
 */
export function emptyEvent(
	props: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	if (window.analytics) {
		window.analytics.track(
			'Empty Event',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}

/**
 * This event contains all supported variations of properties.
 */
export function exampleEvent(
	props: Properties,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	if (window.analytics) {
		window.analytics.track(
			'Example Event',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}

/**
 * checkin != check_in bug
 */
export function checkIn(
	props: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	if (window.analytics) {
		window.analytics.track(
			'check_in',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}

/**
 * checkin != check_in bug
 */
export function checkin(
	props: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	if (window.analytics) {
		window.analytics.track(
			'checkin',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
