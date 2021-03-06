/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * @typedef {!WebMultiAnimationDef|!WebKeyframeAnimationDef}
 */
export let WebAnimationDef;


/**
 * @mixes WebAnimationTimingDef
 * @typedef {{
 *   animations: !Array<!WebAnimationDef>,
 * }}
 */
export let WebMultiAnimationDef;


/**
 * @mixes WebAnimationTimingDef
 * @typedef {{
 *   target: (string|!Element),
 *   keyframes: !WebKeyframesDef,
 * }}
 */
export let WebKeyframeAnimationDef;


/**
 * @typedef {!Object<string, *>|!Array<!Object<string, *>>}
 */
export let WebKeyframesDef;


/**
 * See https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties
 *
 * @mixin
 * @typedef {{
 *   duration: (time|undefined),
 *   delay: (time|undefined),
 *   endDelay: (time|undefined),
 *   iterations: (number|string|undefined),
 *   iterationStart: (number|undefined),
 *   easing: (string|undefined),
 *   direction: (!WebAnimationTimingDirection|undefined),
 *   fill: (!WebAnimationTimingFill|undefined),
 * }}
 */
export let WebAnimationTimingDef;


/**
 * See https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties/direction
 * @enum {string}
 */
export const WebAnimationTimingDirection = {
  NORMAL: 'normal',
  REVERSE: 'reverse',
  ALTERNATE: 'alternate',
  ALTERNATE_REVERSE: 'alternate-reverse',
};


/**
 * See https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties/fill
 * @enum {string}
 */
export const WebAnimationTimingFill = {
  NONE: 'none',
  FORWARDS: 'forwards',
  BACKWARDS: 'backwards',
  BOTH: 'both',
  AUTO: 'auto',
};


/** @const {!Object<string, boolean>} */
const WHITELISTED_RPOPS = {
  'opacity': true,
  'transform': true,
  'visibility': true,
};


/**
 * @param {string} prop
 * @return {boolean}
 */
export function isWhitelistedProp(prop) {
  return WHITELISTED_RPOPS[prop] || false;
}
