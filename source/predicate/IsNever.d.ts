/**
 * @description - A type that determines whether the given type is a never.
 *
 * @template T - The type to check.
 *
 * @returns {Boolean} `true` if the type is a never; otherwise, returns `false`.
 *
 * @example
 * type T0 = IsNever<never> // true
 * type T1 = IsNever<'a' & never> // true
 *
 * type T2 = IsNever<number> // false
 * type T3 = IsNever<null> // false
 * type T4 = IsNever<any> // false
 * type T5 = IsNever<undefined> // false
 */

export type IsNever<T> = [T] extends [never] ? true : false;
