/**
 * @description - Returns a boolean for whether the given type is `any`.
 *
 * @template T -The type to check.
 *
 * @returns {Boolean} - Returns `true` if the given type is `any`; otherwise, returns `false`.
 *
 * @example
 * type T0 = IsAny<any> // true
 * type T1 = IsAny<never> // false
 * type T2 = IsAny<unknown> // false
 * type T3 = IsAny<number> // false
 */

export type IsAny<T> = 0 extends 1 & T ? true : false;
