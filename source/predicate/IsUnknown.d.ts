import { IsAny } from './IsAny';

/**
 * @description - Returns a boolean for whether the given type is `unknown`.
 *
 * @template T - The type to check.
 *
 * @returns {Boolean} - Returns `true` if the given type is `unknown`; otherwise, returns `false`.
 *
 * @example
 * type T0 = IsUnknown<unknown> // true
 * type T1 = IsUnknown<any> // false
 * type T2 = IsUnknown<never> // false
 * type T4 = IsUnknown<number> //false
 */

export type IsUnknown<T> = unknown extends T
  ? IsAny<T> extends true
    ? false
    : true
  : false;
