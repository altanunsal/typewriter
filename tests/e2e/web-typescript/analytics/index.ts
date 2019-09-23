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
export interface UniverseCharactersItemItem {
	/**
	 * The character's name.
	 */
	name: string
}
export interface NestedArrays {
	/**
	 * All known characters from each universe.
	 */
	universeCharacters: UniverseCharactersItemItem[][]
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
export interface OccupantsItem {
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
	occupants: OccupantsItem[]
}
export interface PropertyObjectNameCollision1 {
	universe?: Universe
}
export interface OccupantsItem1 {
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
	occupants: OccupantsItem1[]
}
export interface PropertyObjectNameCollision2 {
	universe?: Universe1
}
export interface PropertySanitized {
	'0000---terrible-property-name~!3': string
}
export interface ObjectItem {
	name?: string
}
export interface SimpleArrayTypes {
	any?: any[]
	boolean?: boolean[]
	integer?: number[]
	nullable?: string[]
	number?: number[]
	object?: ObjectItem[]
	string?: string[]
}
export interface UnionType {
	universe_name: string | number | null
}

export type ViolationHandler = (
	message: Record<string, any>,
	violations: any[]
) => void

let analytics: () => SegmentAnalytics.AnalyticsJS | undefined = () => {
	return window.analytics
}

/** Options to customize the runtime behavior of a Typewriter client. */
export interface TypewriterOptions {
	/**
	 * Underlying analytics instance where analytics calls are forwarded on to.
	 * Defaults to window.analytics.
	 */
	analytics?: SegmentAnalytics.AnalyticsJS
	/**
	 * Handler fired when if an event does not match its spec. This handler
	 * does not fire in production mode, because it requires inlining the full
	 * JSON Schema spec for each event in your Tracking Plan.
	 *
	 * By default, it will throw errors if NODE_ENV = "test" so that tests will fail
	 * if a message does not match the spec. Otherwise, errors will be logged to stderr.
	 */
	onViolation?: ViolationHandler
}

/**
 * Updates the run-time configuration of this Typewriter client.
 *
 * @param {TypewriterOptions} options - the options to upsert
 *
 * @typedef {Object} TypewriterOptions
 * @property {Segment.AnalyticsJS} [analytics] - Underlying analytics instance where analytics
 * 		calls are forwarded on to. Defaults to window.analytics.
 * @property {Function} [onViolation] - Handler fired when if an event does not match its spec. This handler does not fire in
 * 		production mode, because it requires inlining the full JSON Schema spec for each event in your Tracking Plan. By default,
 * 		it will throw errors if NODE_ENV="test" so that tests will fail if a message does not match the spec. Otherwise, errors
 * 		will be logged to stderr.
 */
export function setTypewriterOptions(options: TypewriterOptions) {
	analytics = options.analytics
		? () => options.analytics || window.analytics
		: analytics
}

/**
 * Helper to attach metadata on Typewriter to outbound requests.
 * This is used for attribution and debugging by the Segment team.
 */
function withTypewriterContext(message: Segment.Options = {}): Segment.Options {
	return {
		...message,
		context: {
			...(message.context || {}),
			typewriter: {
				language: 'typescript',
				version: '7.0.0-38',
			},
		},
	}
}

/**
 * @typedef CustomViolationHandler
 * @property {string} `regex property` -
 */
/**
 * @typedef DefaultViolationHandler
 * @property {string} `regex property` -
 */
/**
 * @typedef EveryNullableOptionalType
 * @property {any | null} [optional any] - Optional any property
 * @property {any[] | null} [optional array] - Optional array property
 * @property {boolean | null} [optional boolean] - Optional boolean property
 * @property {number | null} [optional int] - Optional integer property
 * @property {number | null} [optional number] - Optional number property
 * @property {Record<string, any> | null} [optional object] - Optional object property
 * @property {string | null} [optional string] - Optional string property
 * @property {string | null} [optional string with regex] - Optional string property with a regex conditional
 */
/**
 * @typedef EveryNullableRequiredType
 * @property {any | null} `required any` - Required any property
 * @property {any[] | null} `required array` - Required array property
 * @property {boolean | null} `required boolean` - Required boolean property
 * @property {number | null} `required int` - Required integer property
 * @property {number | null} `required number` - Required number property
 * @property {Record<string, any> | null} `required object` - Required object property
 * @property {string | null} `required string` - Required string property
 * @property {string | null} `required string with regex` - Required string property with a regex conditional
 */
/**
 * @typedef EveryOptionalType
 * @property {any | null} [optional any] - Optional any property
 * @property {any[]} [optional array] - Optional array property
 * @property {boolean} [optional boolean] - Optional boolean property
 * @property {number} [optional int] - Optional integer property
 * @property {number} [optional number] - Optional number property
 * @property {Record<string, any>} [optional object] - Optional object property
 * @property {string} [optional string] - Optional string property
 * @property {string} [optional string with regex] - Optional string property with a regex conditional
 */
/**
 * @typedef EveryRequiredType
 * @property {any | null} `required any` - Required any property
 * @property {any[]} `required array` - Required array property
 * @property {boolean} `required boolean` - Required boolean property
 * @property {number} `required int` - Required integer property
 * @property {number} `required number` - Required number property
 * @property {Record<string, any>} `required object` - Required object property
 * @property {string} `required string` - Required string property
 * @property {string} `required string with regex` - Required string property with a regex conditional
 */
/**
 * @typedef UniverseCharactersItemItem
 * @property {string} `name` - The character's name.
 */
/**
 * @typedef NestedArrays
 * @property {UniverseCharactersItemItem[][]} `universeCharacters` - All known characters from each universe.
 */
/**
 * @typedef SubterraneanLab
 * @property {any[]} [jerry\'s memories] -
 * @property {any[]} [morty\'s memories] -
 * @property {string} [summer\'s contingency plan] -
 */
/**
 * @typedef Tunnel
 * @property {SubterraneanLab} `subterranean lab` -
 */
/**
 * @typedef Garage
 * @property {Tunnel} `tunnel` -
 */
/**
 * @typedef NestedObjects
 * @property {Garage} `garage` -
 */
/**
 * @typedef PropertiesCollided
 * @property {string} `Property Collided` -
 * @property {string} `property_collided` -
 */
/**
 * @typedef OccupantsItem
 * @property {string} `name` - The name of this occupant.
 */
/**
 * @typedef Universe
 * @property {string} `name` - The common name of this universe.
 * @property {OccupantsItem[]} `occupants` - The most important occupants in this universe.
 */
/**
 * @typedef PropertyObjectNameCollision1
 * @property {Universe} [universe] -
 */
/**
 * @typedef OccupantsItem1
 * @property {string} `name` - The name of this occupant.
 */
/**
 * @typedef Universe1
 * @property {string} `name` - The common name of this universe.
 * @property {OccupantsItem1[]} `occupants` - The most important occupants in this universe.
 */
/**
 * @typedef PropertyObjectNameCollision2
 * @property {Universe1} [universe] -
 */
/**
 * @typedef PropertySanitized
 * @property {string} `0000---terrible-property-name~!3` -
 */
/**
 * @typedef ObjectItem
 * @property {string} [name] -
 */
/**
 * @typedef SimpleArrayTypes
 * @property {any[]} [any] -
 * @property {boolean[]} [boolean] -
 * @property {number[]} [integer] -
 * @property {string[]} [nullable] -
 * @property {number[]} [number] -
 * @property {ObjectItem[]} [object] -
 * @property {string[]} [string] -
 */
/**
 * @typedef UnionType
 * @property {string | number | null} `universe_name` -
 */

/**
 * Validates that clients properly sanitize event names.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function I42TerribleEventName3(
	props?: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'42_--terrible==\\"event\'++name~!3',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fired before an analytics instance has been set, which should throw an error.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function analyticsInstanceMissing(
	props?: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Analytics Instance Missing',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fired after a client throws an "Analytics Instance Missing" error to mark the test as successful.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function analyticsInstanceMissingThrewError(
	props?: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Analytics Instance Missing Threw Error',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Custom Violation Handler' track call.
 *
 * @param {CustomViolationHandler} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function customViolationHandler(
	props: CustomViolationHandler,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Custom Violation Handler',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Custom Violation Handler Called' track call.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function customViolationHandlerCalled(
	props?: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Custom Violation Handler Called',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Default Violation Handler' track call.
 *
 * @param {DefaultViolationHandler} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function defaultViolationHandler(
	props: DefaultViolationHandler,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Default Violation Handler',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Default Violation Handler Called' track call.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function defaultViolationHandlerCalled(
	props?: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Default Violation Handler Called',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Empty Event' track call.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function emptyEvent(
	props?: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Empty Event',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Event Collided' track call.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function eventCollided(
	props?: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Event Collided',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Every Nullable Optional Type' track call.
 *
 * @param {EveryNullableOptionalType} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function everyNullableOptionalType(
	props?: EveryNullableOptionalType,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Every Nullable Optional Type',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Every Nullable Required Type' track call.
 *
 * @param {EveryNullableRequiredType} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function everyNullableRequiredType(
	props: EveryNullableRequiredType,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Every Nullable Required Type',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Every Optional Type' track call.
 *
 * @param {EveryOptionalType} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function everyOptionalType(
	props?: EveryOptionalType,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Every Optional Type',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Every Required Type' track call.
 *
 * @param {EveryRequiredType} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function everyRequiredType(
	props: EveryRequiredType,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Every Required Type',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Nested Arrays' track call.
 *
 * @param {NestedArrays} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function nestedArrays(
	props: NestedArrays,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Nested Arrays',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Nested Objects' track call.
 *
 * @param {NestedObjects} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function nestedObjects(
	props: NestedObjects,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Nested Objects',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Properties Collided' track call.
 *
 * @param {PropertiesCollided} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function propertiesCollided(
	props: PropertiesCollided,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Properties Collided',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Property Object Name Collision #1' track call.
 *
 * @param {PropertyObjectNameCollision1} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function propertyObjectNameCollision1(
	props?: PropertyObjectNameCollision1,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Property Object Name Collision #1',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Property Object Name Collision #2' track call.
 *
 * @param {PropertyObjectNameCollision2} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function propertyObjectNameCollision2(
	props?: PropertyObjectNameCollision2,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Property Object Name Collision #2',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Property Sanitized' track call.
 *
 * @param {PropertySanitized} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function propertySanitized(
	props: PropertySanitized,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Property Sanitized',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Simple Array Types' track call.
 *
 * @param {SimpleArrayTypes} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function simpleArrayTypes(
	props?: SimpleArrayTypes,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Simple Array Types',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Union Type' track call.
 *
 * @param {UnionType} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function unionType(
	props: UnionType,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track('Union Type', props || {}, withTypewriterContext(options), callback)
	}
}
/**
 * Fired if a client correctly handled an unknown method call.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function unknownEventHandlerCalled(
	props?: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'Unknown Event Handler Called',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'event_collided' track call.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function eventCollided1(
	props?: Record<string, any>,
	options?: Segment.Options,
	callback?: Segment.Callback
): void {
	const a = analytics()
	if (a) {
		a.track(
			'event_collided',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}

const clientAPI = {
	/**
	 * Updates the run-time configuration of this Typewriter client.
	 *
	 * @param {TypewriterOptions} options - the options to upsert
	 *
	 * @typedef {Object} TypewriterOptions
	 * @property {Segment.AnalyticsJS} [analytics] - Underlying analytics instance where analytics
	 * 		calls are forwarded on to. Defaults to window.analytics.
	 * @property {Function} [onViolation] - Handler fired when if an event does not match its spec. This handler does not fire in
	 * 		production mode, because it requires inlining the full JSON Schema spec for each event in your Tracking Plan. By default,
	 * 		it will throw errors if NODE_ENV="test" so that tests will fail if a message does not match the spec. Otherwise, errors
	 * 		will be logged to stderr.
	 */
	setTypewriterOptions,
	/**
	 * Validates that clients properly sanitize event names.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	I42TerribleEventName3,
	/**
	 * Fired before an analytics instance has been set, which should throw an error.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	analyticsInstanceMissing,
	/**
	 * Fired after a client throws an "Analytics Instance Missing" error to mark the test as successful.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	analyticsInstanceMissingThrewError,
	/**
	 * Fires a 'Custom Violation Handler' track call.
	 *
	 * @param {CustomViolationHandler} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	customViolationHandler,
	/**
	 * Fires a 'Custom Violation Handler Called' track call.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	customViolationHandlerCalled,
	/**
	 * Fires a 'Default Violation Handler' track call.
	 *
	 * @param {DefaultViolationHandler} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	defaultViolationHandler,
	/**
	 * Fires a 'Default Violation Handler Called' track call.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	defaultViolationHandlerCalled,
	/**
	 * Fires a 'Empty Event' track call.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	emptyEvent,
	/**
	 * Fires a 'Event Collided' track call.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	eventCollided,
	/**
	 * Fires a 'Every Nullable Optional Type' track call.
	 *
	 * @param {EveryNullableOptionalType} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	everyNullableOptionalType,
	/**
	 * Fires a 'Every Nullable Required Type' track call.
	 *
	 * @param {EveryNullableRequiredType} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	everyNullableRequiredType,
	/**
	 * Fires a 'Every Optional Type' track call.
	 *
	 * @param {EveryOptionalType} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	everyOptionalType,
	/**
	 * Fires a 'Every Required Type' track call.
	 *
	 * @param {EveryRequiredType} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	everyRequiredType,
	/**
	 * Fires a 'Nested Arrays' track call.
	 *
	 * @param {NestedArrays} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	nestedArrays,
	/**
	 * Fires a 'Nested Objects' track call.
	 *
	 * @param {NestedObjects} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	nestedObjects,
	/**
	 * Fires a 'Properties Collided' track call.
	 *
	 * @param {PropertiesCollided} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	propertiesCollided,
	/**
	 * Fires a 'Property Object Name Collision #1' track call.
	 *
	 * @param {PropertyObjectNameCollision1} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	propertyObjectNameCollision1,
	/**
	 * Fires a 'Property Object Name Collision #2' track call.
	 *
	 * @param {PropertyObjectNameCollision2} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	propertyObjectNameCollision2,
	/**
	 * Fires a 'Property Sanitized' track call.
	 *
	 * @param {PropertySanitized} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	propertySanitized,
	/**
	 * Fires a 'Simple Array Types' track call.
	 *
	 * @param {SimpleArrayTypes} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	simpleArrayTypes,
	/**
	 * Fires a 'Union Type' track call.
	 *
	 * @param {UnionType} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	unionType,
	/**
	 * Fired if a client correctly handled an unknown method call.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	unknownEventHandlerCalled,
	/**
	 * Fires a 'event_collided' track call.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	eventCollided1,
}

export default new Proxy<typeof clientAPI>(clientAPI, {
	get(target, method) {
		if (typeof method === 'string' && target.hasOwnProperty(method)) {
			return target[method as keyof typeof clientAPI]
		}

		return () => {
			console.warn(`⚠️  You made an analytics call (${String(
				method
			)}) that can't be found. Either:
    a) Re-generate your typewriter client: \`npm run typewriter\`
    b) Add it to your Tracking Plan: https://app.segment.com/TODO/tracking-plans/TODO`)
			const a = analytics()
			if (a) {
				a.track('Unknown Analytics Call Fired', {
					method,
				})
			}
		}
	},
})
