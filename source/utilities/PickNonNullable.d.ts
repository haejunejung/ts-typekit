import { Simplify } from './Simplify';

/**
 * @description
 * Creates a new type by converting the selected keys to NonNullable to remove null and undefined,
 * while keeping the rest of the type unchanged.
 *
 * @template T - The original type from which keys are being picked.
 * @template K - The keys of the `T` to which NonNullable will be applied.
 *
 * @returns - A new type with keys in K made non-nullable.
 *
 * @example
 * type SomeType = {
 *  readonly a: number | null | undefined;
 *  b: boolean;
 *  c: string;
 * }
 *
 * type SomeNonNullableType = PickNonNullable<SomeType, 'a'>;
 * // {
 * //   readonly a: number;
 * //   b: boolean;
 * //   c: string;
 * // }
 */
export type PickNonNullable<T, K extends keyof T> = Simplify<
  Omit<T, K> & { [P in K]: NonNullable<T[P]> }
>;
