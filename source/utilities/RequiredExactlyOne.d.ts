import { Simplify } from './Simplify';

/**
 * @description
 * Creates a new type where exactly one of the specified keys is maed required,
 * and the other specified keys are set to never, while keeping the rest of the type unchanged.
 *
 * @template T - The original type from which keys are being picked.
 * @template K - The keys from the original type `T` that one of the `K` is made required and the others are set to never.
 *
 * @returns
 * A new type where exactly one of the specified keys is required,
 * and the other specified keys are set to never, with the rest of the properties from the original type unchanged.
 *
 * @example
 * type T0 = {
 *  a: number;
 *  b: string;
 *  c: boolean;
 * }
 *
 * type E0 = RequiredExactlyOne<T0, 'a' | 'b'>; // { a: number; b?: never; c: boolean } | { a?: never; b: string; c: boolean }
 */
export type RequiredExactlyOne<T, K extends keyof T> = Simplify<
  Omit<T, K> &
    {
      [P in K]: Required<Pick<T, P>> & Partial<Record<Exclude<K, P>, never>>;
    }[K]
>;
