import { Simplify } from './Simplify';

/**
 * @description
 * Creates a new type where the specified keys are made readonly,
 * while keeping the reset of the type remain unchanged.
 *
 * @template T - The original type from which keys are being picked.
 * @template K - The keys from the original type `T` that should be made readonly.
 *
 * @returns - A new type with keys in K made readonly.
 *
 * @example
 * type User = {
 *  id: number;
 *  image: string;
 *  name: string;
 *  age: string;
 *  job: string;
 *  hobby: string[];
 * }
 *
 * type SomeReadonlyUser = PickReadonly<User, 'id'>;
 * // {
 * //   readonly id: number;
 * //   image: string;
 * //   name: string;
 * //   age: string;
 * //   job: string;
 * //   hobby: string[];
 * // }
 */
export type PickReadonly<T, K extends keyof T> = Simplify<
  Omit<T, K> & Readonly<Pick<T, K>>
>;
