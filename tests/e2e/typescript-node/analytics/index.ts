/**
 * This client was automatically generated by Segment Typewriter. ** Do Not Edit **
 */

import * as Segment from './segment'

export interface CustomViolationHandler {
	'regex property': string
}
export interface DefaultViolationHandler {
	'regex property': string
}
export interface EveryNullableOptionalType {
	/**
	 * Optional any property
	 */
	'optional any'?: any | null
	/**
	 * Optional array property
	 */
	'optional array'?: any[] | null
	/**
	 * Optional boolean property
	 */
	'optional boolean'?: boolean | null
	/**
	 * Optional integer property
	 */
	'optional int'?: number | null
	/**
	 * Optional number property
	 */
	'optional number'?: number | null
	/**
	 * Optional object property
	 */
	'optional object'?: Record<string, any> | null
	/**
	 * Optional string property
	 */
	'optional string'?: string | null
	/**
	 * Optional string property with a regex conditional
	 */
	'optional string with regex'?: string | null
}
export interface EveryNullableRequiredType {
	/**
	 * Required any property
	 */
	'required any': any | null
	/**
	 * Required array property
	 */
	'required array': any[] | null
	/**
	 * Required boolean property
	 */
	'required boolean': boolean | null
	/**
	 * Required integer property
	 */
	'required int': number | null
	/**
	 * Required number property
	 */
	'required number': number | null
	/**
	 * Required object property
	 */
	'required object': Record<string, any> | null
	/**
	 * Required string property
	 */
	'required string': string | null
	/**
	 * Required string property with a regex conditional
	 */
	'required string with regex': string | null
}
export interface EveryOptionalType {
	/**
	 * Optional any property
	 */
	'optional any'?: any | null
	/**
	 * Optional array property
	 */
	'optional array'?: any[]
	/**
	 * Optional boolean property
	 */
	'optional boolean'?: boolean
	/**
	 * Optional integer property
	 */
	'optional int'?: number
	/**
	 * Optional number property
	 */
	'optional number'?: number
	/**
	 * Optional object property
	 */
	'optional object'?: Record<string, any>
	/**
	 * Optional string property
	 */
	'optional string'?: string
	/**
	 * Optional string property with a regex conditional
	 */
	'optional string with regex'?: string
}
export interface EveryRequiredType {
	/**
	 * Required any property
	 */
	'required any': any | null
	/**
	 * Required array property
	 */
	'required array': any[]
	/**
	 * Required boolean property
	 */
	'required boolean': boolean
	/**
	 * Required integer property
	 */
	'required int': number
	/**
	 * Required number property
	 */
	'required number': number
	/**
	 * Required object property
	 */
	'required object': Record<string, any>
	/**
	 * Required string property
	 */
	'required string': string
	/**
	 * Required string property with a regex conditional
	 */
	'required string with regex': string
}
export interface UniverseCharacters {
	/**
	 * The character's name.
	 */
	name: string
}
export interface NestedArrays {
	/**
	 * All known characters from each universe.
	 */
	universeCharacters: UniverseCharacters[][]
}
export interface SubterraneanLab {
	"jerry's memories"?: any[]
	"morty's memories"?: any[]
	"summer's contingency plan"?: string
}
export interface Tunnel {
	'subterranean lab': SubterraneanLab
}
export interface Garage {
	tunnel: Tunnel
}
export interface NestedObjects {
	garage: Garage
}
export interface PropertiesCollided {
	'Property Collided': string
	property_collided: string
}
export interface Occupants {
	/**
	 * The name of this occupant.
	 */
	name: string
}
export interface Universe {
	/**
	 * The common name of this universe.
	 */
	name: string
	/**
	 * The most important occupants in this universe.
	 */
	occupants: Occupants[]
}
export interface PropertyObjectNameCollision1 {
	universe?: Universe
}
export interface Occupants1 {
	/**
	 * The name of this occupant.
	 */
	name: string
}
export interface Universe1 {
	/**
	 * The common name of this universe.
	 */
	name: string
	/**
	 * The most important occupants in this universe.
	 */
	occupants: Occupants1[]
}
export interface PropertyObjectNameCollision2 {
	universe?: Universe1
}
export interface PropertySanitized {
	'0000---terrible-property-name~!3': string
}
export interface Object {
	name?: string
}
export interface SimpleArrayTypes {
	any?: any[]
	boolean?: boolean[]
	integer?: number[]
	nullable?: string[]
	number?: number[]
	object?: Object[]
	string?: string[]
}
export interface UnionType {
	universe_name: string | number | null
}

/** Options to customize the runtime behavior of a Typewriter client. */
export interface TypewriterOptions {
	/**
	 * Underlying analytics instance where analytics calls are forwarded on to.
	 */
	analytics: Segment.AnalyticsNode
	/**
	 * Handler fired when if an event does not match its spec. Returns a boolean
	 * indicating if the message should still be sent to Segment. This handler
	 * does not fire in production mode, because it requires inlining the full
	 * JSON Schema spec.
	 *
	 * By default, it will throw errors if NODE_ENV = "test" so that tests will fail
	 * if a message does not match the spec. Otherwise, errors will be logged to stderr.
	 * Also by default, messages that generate Violations will be dropped.
	 */
	onViolation?: ViolationHandler
}

export type ViolationHandler = (
	message: Segment.TrackMessage<Record<string, any>>,
	violations: any[]
) => boolean

const missingAnalyticsNodeError = new Error(`You must set an analytics-node instance:

>	const SegmentAnalytics = require('analytics-node')
>	const { setTypewriterOptions } = require('./analytics')
>
>	const analytics = new SegmentAnalytics('SEGMENT_WRITE_KEY')
>	setTypewriterOptions({
>		analytics: analytics,
>	})

For more information on analytics-node, see: https://segment.com/docs/sources/server/node/quickstart/
`)

let analytics: () => Segment.AnalyticsNode | undefined = () => {
	throw missingAnalyticsNodeError
}

/**
 * Update the run-time configuration of this Typewriter client.
 */
export function setTypewriterOptions(options: TypewriterOptions) {
	analytics = options.analytics ? () => options.analytics : analytics
}

/**
 * Helper to attach metadata on Typewriter to outbound requests.
 * This is used for attribution and debugging by the Segment team.
 */
function withTypewriterContext<P, T extends Segment.TrackMessage<P>>(
	message: T
): T {
	return {
		...message,
		context: {
			...(message.context || {}),
			typewriter: {
				language: 'typescript',
				version: '7.0.0',
			},
		},
	}
}

export function I42TerribleEventName3(
	message: Segment.TrackMessage<Record<string, any>>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: '42_--terrible==\\"event\'++name~!3',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function analyticsInstanceMissing(
	message: Segment.TrackMessage<Record<string, any>>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Analytics Instance Missing',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function analyticsInstanceMissingThrewError(
	message: Segment.TrackMessage<Record<string, any>>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Analytics Instance Missing Threw Error',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function customViolationHandler(
	message: Segment.TrackMessage<CustomViolationHandler>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Custom Violation Handler',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function customViolationHandlerCalled(
	message: Segment.TrackMessage<Record<string, any>>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Custom Violation Handler Called',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function defaultViolationHandler(
	message: Segment.TrackMessage<DefaultViolationHandler>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Default Violation Handler',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function defaultViolationHandlerCalled(
	message: Segment.TrackMessage<Record<string, any>>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Default Violation Handler Called',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function emptyEvent(
	message: Segment.TrackMessage<Record<string, any>>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Empty Event',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function eventCollided(
	message: Segment.TrackMessage<Record<string, any>>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Event Collided',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function everyNullableOptionalType(
	message: Segment.TrackMessage<EveryNullableOptionalType>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Every Nullable Optional Type',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function everyNullableRequiredType(
	message: Segment.TrackMessage<EveryNullableRequiredType>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Every Nullable Required Type',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function everyOptionalType(
	message: Segment.TrackMessage<EveryOptionalType>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Every Optional Type',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function everyRequiredType(
	message: Segment.TrackMessage<EveryRequiredType>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Every Required Type',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function nestedArrays(
	message: Segment.TrackMessage<NestedArrays>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Nested Arrays',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function nestedObjects(
	message: Segment.TrackMessage<NestedObjects>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Nested Objects',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function propertiesCollided(
	message: Segment.TrackMessage<PropertiesCollided>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Properties Collided',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function propertyObjectNameCollision1(
	message: Segment.TrackMessage<PropertyObjectNameCollision1>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Property Object Name Collision #1',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function propertyObjectNameCollision2(
	message: Segment.TrackMessage<PropertyObjectNameCollision2>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Property Object Name Collision #2',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function propertySanitized(
	message: Segment.TrackMessage<PropertySanitized>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Property Sanitized',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function simpleArrayTypes(
	message: Segment.TrackMessage<SimpleArrayTypes>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Simple Array Types',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function unionType(
	message: Segment.TrackMessage<UnionType>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'Union Type',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
export function eventCollided1(
	message: Segment.TrackMessage<Record<string, any>>,
	callback?: Segment.Callback
): void {
	const msg = withTypewriterContext({
		properties: {},
		...message,
		event: 'event_collided',
	})

	const a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
