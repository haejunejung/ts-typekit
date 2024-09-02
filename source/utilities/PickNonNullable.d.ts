import { Simplify } from './Simplify';

/**
 * @description
 * Creates a new type where the specified keys are made non-nullable,
 * while keeping the rest of the type remain unchanged.
 *
 * @template T - The original type from which keys are being picked.
 * @template K - The keys from the original type `T` that should be made non-nullable.
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
