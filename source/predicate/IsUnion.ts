import { IsNever } from './IsNever';
import { IsEqual } from './IsEqual';

/**
 * @description
 * A type that determines whether the given type is a union.
 *
 * @template T - The type to check.
 * @template U - A copy of the original type `T` used for comparison.
 *
 * @returns {Boolean} - `true` if the type is a union; otherwise, returns `false`.
 *
 * @example
 * IsUnion<[]>; // false
 * IsUnion<null>; // false
 * IsUnion<number>; // false
 * IsUnion<number | string>; // true
 * IsUnion<'foo' | 'bar'>; // true
 */
export type IsUnion<T, U = T> =
  IsNever<T> extends true
    ? false
    : T extends any
      ? IsEqual<T, U> extends true
        ? false
        : true
      : false;
