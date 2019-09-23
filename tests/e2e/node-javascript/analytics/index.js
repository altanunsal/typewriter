'use strict'
/**
 * This client was automatically generated by Segment Typewriter. ** Do Not Edit **
 */
var __assign =
	(this && this.__assign) ||
	function() {
		__assign =
			Object.assign ||
			function(t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i]
					for (var p in s)
						if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
				}
				return t
			}
		return __assign.apply(this, arguments)
	}
Object.defineProperty(exports, '__esModule', { value: true })
var missingAnalyticsNodeError = new Error(
	"You must set an analytics-node instance:\n\n>\tconst SegmentAnalytics = require('analytics-node')\n>\tconst { setTypewriterOptions } = require('./analytics')\n>\n>\tconst analytics = new SegmentAnalytics('SEGMENT_WRITE_KEY')\n>\tsetTypewriterOptions({\n>\t\tanalytics: analytics,\n>\t})\n\nFor more information on analytics-node, see: https://segment.com/docs/sources/server/node/quickstart/\n"
)
var analytics = function() {
	throw missingAnalyticsNodeError
}
/**
 * Updates the run-time configuration of this Typewriter client.
 * This function must be called with a configured analytics-node instance before firing
 * any analytics calls, or else a `missingAnalyticsNodeError` error will be thrown.
 *
 * @param {TypewriterOptions} options - the options to upsert
 *
 * @typedef {Object} TypewriterOptions
 * @property {Segment.AnalyticsNode} analytics - Underlying analytics instance where analytics
 * 		calls are forwarded on to.
 * @property {Function} [onViolation] - Handler fired when if an event does not match its spec. This handler does not fire in
 * 		production mode, because it requires inlining the full JSON Schema spec for each event in your Tracking Plan. By default,
 * 		it will throw errors if NODE_ENV="test" so that tests will fail if a message does not match the spec. Otherwise, errors
 * 		will be logged to stderr.
 */
function setTypewriterOptions(options) {
	analytics = options.analytics
		? function() {
				return options.analytics
		  }
		: analytics
}
exports.setTypewriterOptions = setTypewriterOptions
/**
 * Helper to attach metadata on Typewriter to outbound requests.
 * This is used for attribution and debugging by the Segment team.
 */
function withTypewriterContext(message) {
	return __assign({}, message, {
		context: __assign({}, message.context || {}, {
			typewriter: {
				language: 'javascript',
				version: '7.0.0-37',
			},
		}),
	})
}
/**
 * A message payload for an analytics-node `.track()` call.
 * See: https://segment.com/docs/spec/track/
 *
 * @typedef TrackMessage<PropertiesType>
 * @property {string | number} [userId] - The ID for this user in your database.
 * @property {string | number} [anonymousId] - An ID to associated with the user when you don’t know who they are.
 * @property {PropertiesType} [properties] - A dictionary of properties for the event.
 * @property {Date} [timestamp] - A Javascript date object representing when the track took place. If the track
 * 		just happened, leave it out and we’ll use the server’s time. If you’re importing data from the past make
 * 		sure you to send a timestamp.
 * @template PropertiesType
 */
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
 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function I42TerribleEventName3(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, {
			event: '42_--terrible==\\"event\'++name~!3',
		})
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.I42TerribleEventName3 = I42TerribleEventName3
/**
 * Fired before an analytics instance has been set, which should throw an error.
 *
 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function analyticsInstanceMissing(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, {
			event: 'Analytics Instance Missing',
		})
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.analyticsInstanceMissing = analyticsInstanceMissing
/**
 * Fired after a client throws an "Analytics Instance Missing" error to mark the test as successful.
 *
 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function analyticsInstanceMissingThrewError(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, {
			event: 'Analytics Instance Missing Threw Error',
		})
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.analyticsInstanceMissingThrewError = analyticsInstanceMissingThrewError
/**
 * Fires a 'Custom Violation Handler' track call.
 *
 * @param {TrackMessage<CustomViolationHandler>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function customViolationHandler(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, { event: 'Custom Violation Handler' })
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.customViolationHandler = customViolationHandler
/**
 * Fires a 'Custom Violation Handler Called' track call.
 *
 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function customViolationHandlerCalled(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, {
			event: 'Custom Violation Handler Called',
		})
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.customViolationHandlerCalled = customViolationHandlerCalled
/**
 * Fires a 'Default Violation Handler' track call.
 *
 * @param {TrackMessage<DefaultViolationHandler>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function defaultViolationHandler(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, {
			event: 'Default Violation Handler',
		})
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.defaultViolationHandler = defaultViolationHandler
/**
 * Fires a 'Default Violation Handler Called' track call.
 *
 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function defaultViolationHandlerCalled(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, {
			event: 'Default Violation Handler Called',
		})
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.defaultViolationHandlerCalled = defaultViolationHandlerCalled
/**
 * Fires a 'Empty Event' track call.
 *
 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function emptyEvent(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, { event: 'Empty Event' })
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.emptyEvent = emptyEvent
/**
 * Fires a 'Event Collided' track call.
 *
 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function eventCollided(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, { event: 'Event Collided' })
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.eventCollided = eventCollided
/**
 * Fires a 'Every Nullable Optional Type' track call.
 *
 * @param {TrackMessage<EveryNullableOptionalType>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function everyNullableOptionalType(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, {
			event: 'Every Nullable Optional Type',
		})
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.everyNullableOptionalType = everyNullableOptionalType
/**
 * Fires a 'Every Nullable Required Type' track call.
 *
 * @param {TrackMessage<EveryNullableRequiredType>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function everyNullableRequiredType(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, {
			event: 'Every Nullable Required Type',
		})
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.everyNullableRequiredType = everyNullableRequiredType
/**
 * Fires a 'Every Optional Type' track call.
 *
 * @param {TrackMessage<EveryOptionalType>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function everyOptionalType(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, { event: 'Every Optional Type' })
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.everyOptionalType = everyOptionalType
/**
 * Fires a 'Every Required Type' track call.
 *
 * @param {TrackMessage<EveryRequiredType>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function everyRequiredType(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, { event: 'Every Required Type' })
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.everyRequiredType = everyRequiredType
/**
 * Fires a 'Nested Arrays' track call.
 *
 * @param {TrackMessage<NestedArrays>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function nestedArrays(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, { event: 'Nested Arrays' })
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.nestedArrays = nestedArrays
/**
 * Fires a 'Nested Objects' track call.
 *
 * @param {TrackMessage<NestedObjects>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function nestedObjects(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, { event: 'Nested Objects' })
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.nestedObjects = nestedObjects
/**
 * Fires a 'Properties Collided' track call.
 *
 * @param {TrackMessage<PropertiesCollided>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function propertiesCollided(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, { event: 'Properties Collided' })
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.propertiesCollided = propertiesCollided
/**
 * Fires a 'Property Object Name Collision #1' track call.
 *
 * @param {TrackMessage<PropertyObjectNameCollision1>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function propertyObjectNameCollision1(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, {
			event: 'Property Object Name Collision #1',
		})
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.propertyObjectNameCollision1 = propertyObjectNameCollision1
/**
 * Fires a 'Property Object Name Collision #2' track call.
 *
 * @param {TrackMessage<PropertyObjectNameCollision2>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function propertyObjectNameCollision2(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, {
			event: 'Property Object Name Collision #2',
		})
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.propertyObjectNameCollision2 = propertyObjectNameCollision2
/**
 * Fires a 'Property Sanitized' track call.
 *
 * @param {TrackMessage<PropertySanitized>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function propertySanitized(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, { event: 'Property Sanitized' })
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.propertySanitized = propertySanitized
/**
 * Fires a 'Simple Array Types' track call.
 *
 * @param {TrackMessage<SimpleArrayTypes>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function simpleArrayTypes(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, { event: 'Simple Array Types' })
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.simpleArrayTypes = simpleArrayTypes
/**
 * Fires a 'Union Type' track call.
 *
 * @param {TrackMessage<UnionType>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function unionType(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, { event: 'Union Type' })
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.unionType = unionType
/**
 * Fired if a client correctly handled an unknown method call.
 *
 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function unknownEventHandlerCalled(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, {
			event: 'Unknown Event Handler Called',
		})
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.unknownEventHandlerCalled = unknownEventHandlerCalled
/**
 * Fires a 'event_collided' track call.
 *
 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
function eventCollided1(message, callback) {
	var msg = withTypewriterContext(
		__assign({ properties: {} }, message, { event: 'event_collided' })
	)
	var a = analytics()
	if (a) {
		a.track(msg, callback)
	} else {
		throw missingAnalyticsNodeError
	}
}
exports.eventCollided1 = eventCollided1
var clientAPI = {
	/**
	 * Updates the run-time configuration of this Typewriter client.
	 * This function must be called with a configured analytics-node instance before firing
	 * any analytics calls, or else a `missingAnalyticsNodeError` error will be thrown.
	 *
	 * @param {TypewriterOptions} options - the options to upsert
	 *
	 * @typedef {Object} TypewriterOptions
	 * @property {Segment.AnalyticsNode} analytics - Underlying analytics instance where analytics
	 * 		calls are forwarded on to.
	 * @property {Function} [onViolation] - Handler fired when if an event does not match its spec. This handler does not fire in
	 * 		production mode, because it requires inlining the full JSON Schema spec for each event in your Tracking Plan. By default,
	 * 		it will throw errors if NODE_ENV="test" so that tests will fail if a message does not match the spec. Otherwise, errors
	 * 		will be logged to stderr.
	 */
	setTypewriterOptions: setTypewriterOptions,
	/**
	 * Validates that clients properly sanitize event names.
	 *
	 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	I42TerribleEventName3: I42TerribleEventName3,
	/**
	 * Fired before an analytics instance has been set, which should throw an error.
	 *
	 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	analyticsInstanceMissing: analyticsInstanceMissing,
	/**
	 * Fired after a client throws an "Analytics Instance Missing" error to mark the test as successful.
	 *
	 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	analyticsInstanceMissingThrewError: analyticsInstanceMissingThrewError,
	/**
	 * Fires a 'Custom Violation Handler' track call.
	 *
	 * @param {TrackMessage<CustomViolationHandler>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	customViolationHandler: customViolationHandler,
	/**
	 * Fires a 'Custom Violation Handler Called' track call.
	 *
	 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	customViolationHandlerCalled: customViolationHandlerCalled,
	/**
	 * Fires a 'Default Violation Handler' track call.
	 *
	 * @param {TrackMessage<DefaultViolationHandler>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	defaultViolationHandler: defaultViolationHandler,
	/**
	 * Fires a 'Default Violation Handler Called' track call.
	 *
	 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	defaultViolationHandlerCalled: defaultViolationHandlerCalled,
	/**
	 * Fires a 'Empty Event' track call.
	 *
	 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	emptyEvent: emptyEvent,
	/**
	 * Fires a 'Event Collided' track call.
	 *
	 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	eventCollided: eventCollided,
	/**
	 * Fires a 'Every Nullable Optional Type' track call.
	 *
	 * @param {TrackMessage<EveryNullableOptionalType>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	everyNullableOptionalType: everyNullableOptionalType,
	/**
	 * Fires a 'Every Nullable Required Type' track call.
	 *
	 * @param {TrackMessage<EveryNullableRequiredType>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	everyNullableRequiredType: everyNullableRequiredType,
	/**
	 * Fires a 'Every Optional Type' track call.
	 *
	 * @param {TrackMessage<EveryOptionalType>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	everyOptionalType: everyOptionalType,
	/**
	 * Fires a 'Every Required Type' track call.
	 *
	 * @param {TrackMessage<EveryRequiredType>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	everyRequiredType: everyRequiredType,
	/**
	 * Fires a 'Nested Arrays' track call.
	 *
	 * @param {TrackMessage<NestedArrays>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	nestedArrays: nestedArrays,
	/**
	 * Fires a 'Nested Objects' track call.
	 *
	 * @param {TrackMessage<NestedObjects>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	nestedObjects: nestedObjects,
	/**
	 * Fires a 'Properties Collided' track call.
	 *
	 * @param {TrackMessage<PropertiesCollided>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	propertiesCollided: propertiesCollided,
	/**
	 * Fires a 'Property Object Name Collision #1' track call.
	 *
	 * @param {TrackMessage<PropertyObjectNameCollision1>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	propertyObjectNameCollision1: propertyObjectNameCollision1,
	/**
	 * Fires a 'Property Object Name Collision #2' track call.
	 *
	 * @param {TrackMessage<PropertyObjectNameCollision2>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	propertyObjectNameCollision2: propertyObjectNameCollision2,
	/**
	 * Fires a 'Property Sanitized' track call.
	 *
	 * @param {TrackMessage<PropertySanitized>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	propertySanitized: propertySanitized,
	/**
	 * Fires a 'Simple Array Types' track call.
	 *
	 * @param {TrackMessage<SimpleArrayTypes>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	simpleArrayTypes: simpleArrayTypes,
	/**
	 * Fires a 'Union Type' track call.
	 *
	 * @param {TrackMessage<UnionType>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	unionType: unionType,
	/**
	 * Fired if a client correctly handled an unknown method call.
	 *
	 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	unknownEventHandlerCalled: unknownEventHandlerCalled,
	/**
	 * Fires a 'event_collided' track call.
	 *
	 * @param {TrackMessage<Record<string, any>>} message - The analytics properties that will be sent to Segment.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	eventCollided1: eventCollided1,
}
exports.default = new Proxy(clientAPI, {
	get: function(target, method) {
		if (typeof method === 'string' && target.hasOwnProperty(method)) {
			return target[method]
		}
		return function() {
			console.warn(
				'\u26A0\uFE0F  You made an analytics call (' +
					String(method) +
					") that can't be found. Either:\n    a) Re-generate your typewriter client: `npm run typewriter`\n    b) Add it to your Tracking Plan: https://app.segment.com/TODO/tracking-plans/TODO"
			)
			var a = analytics()
			if (a) {
				a.track(
					withTypewriterContext({
						event: 'Unknown Analytics Call Fired',
						properties: {
							method: method,
						},
						userId: 'typewriter',
					})
				)
			}
		}
	},
})
