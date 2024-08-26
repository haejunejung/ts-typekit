import { Simplify } from './Simplify';

/**
 * @description
 * Creates a new type where the specified keys are made optional,
 * while keeping the rest of the type remain unchanged.
 *
 * @template T - The original type from which keys are being picked.
 * @template K - The keys from the original type `T` that should be made optional.
 *
 * @returns - A new type with keys in K made optioanl.
 *
 * @example
 * type User = {
 *  id: number;
 *  name: string;
 *  age: number;
 * };
 *
 * type UserIdOptional = PickOptional<User, 'id'>;
 * // {
 * //  id?: number;
 * //  name: string;
 * //  age: number;
 * // };
 */
export type PickOptional<T, K extends keyof T> = Simplify<
  Omit<T, K> & Partial<Pick<T, K>>
>;
