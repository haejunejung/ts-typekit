/**
 * @description - A type that determinse whether the given type is a tuple type.
 *
 * @template T - The type to check.
 *
 * @returns {Boolean} - `true` if the type is a tuple; otherwise, returns `false`.
 *
 * @example
 * type T0 = IsTuple<[]> // true
 * type T1 = IsTuple<[number]> // true
 *
 * type T2 = IsTuple<any[]> // false
 * type T3 = IsTuple<unknown[]> // false
 */
export type IsTuple<T> = T extends any[] | readonly any[]
  ? number extends T['length']
    ? false
    : true
  : false;
