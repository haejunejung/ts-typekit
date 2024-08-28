import { Simplify } from './Simplify';

/**
 * @description
 * Creates a new type where the specified keys are made required,
 * while keeping the rest of the type remain unchanged.
 *
 * @template T - The original type from which keys are being picked.
 * @template K - The keys from the original type `T` that should be made required.
 *
 * @returns - A new type with keys in K made required.
 *
 * @example
 * type Post = {
 *  id: number;
 *  authorId: number;
 *  role: 'seller' | 'buyer';
 *  price?: number;
 * };
 *
 * type PriceRequiredPost = PickRequired<Post, 'price'>;
 * // {
 * //   id: number;
 * //   authorId: number;
 * //   role: 'seller' | 'buyer';
 * //   price: number;
 * // }
 */
export type PickRequired<T, K extends keyof T> = Simplify<
  Omit<T, K> & Required<Pick<T, K>>
>;
