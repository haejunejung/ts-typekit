/**
 * @description - A type that determines whether the given type is an array type.
 *
 * @template T - The type to check.
 *
 * @returns {Boolean} - `true` if the type is an array; otherwise, returns `false`.
 *
 * @example
 * type T0 = IsArray<[]> // true
 * type T1 = IsArray<number[]> // true
 * type T2 = IsArray<readonly []> // true
 * type T3 = IsArray<Array<number>> // true
 * type T4 = IsArray<ReadonlyArray<number>> // true
 *
 * type T5 = IsArray<number> // false
 * type T6 = IsArray<{}> // false
 * type T7 = IsArray<null> // false
 * type T8 = IsArray<undefined> // false
 */

export type IsArray<T> = T extends any[] | readonly any[] ? true : false;
