/**
 * @description
 * Returns a boolean for whether the two given types are equal.
 *
 * @template A - The first type to compare.
 * @template B - The second type to compare.
 *
 * @returns {Boolean}
 * Returns `true` if the types A and B are exactly equal; otherwise, returns `false`.
 *
 * @example
 * type T0 = IsEqual<number, number> // true
 * type T1 = IsEqual<'1', '1'> // true
 *
 * type T2 = IsEqaul<string, number> // false
 * type T3 = IsEqual<any, number> // false
 *
 * @see https://github.com/Microsoft/TypeScript/issues/27024
 */
export type IsEqual<A, B> =
  (<G>() => G extends A ? 1 : 2) extends <G>() => G extends B ? 1 : 2
    ? true
    : false;
