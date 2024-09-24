import { IsNever } from '@/predicate/IsNever';
import { Simplify } from './Simplify';

type InternalUnionToIntersection<U> = (
  U extends unknown ? (x: U) => void : never
) extends (x: infer I) => void
  ? I & U
  : never;

type SimplifyIfRecord<T> =
  T extends Record<PropertyKey, unknown> ? Simplify<T> : T;

/**
 * @description Convert a union type to an intersection type using distributive conditional types.
 *
 * @template U The union type to be converted to an intersection type.
 *
 * @returns The intersection type resulting from the conversion of the union type.
 *
 * @example
 * type T0 = { a: number };
 * type T1 = { b: string };
 * type Result = UnionToIntersection<T0 | T1>; // { a: number; b: string; }
 */
export type UnionToIntersection<U> =
  IsNever<U> extends true
    ? never
    : SimplifyIfRecord<InternalUnionToIntersection<U>>;
