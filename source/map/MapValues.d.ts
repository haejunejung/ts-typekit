/**
 * @description - Extracts the value type from a given map type `T`.
 *
 * @template T - The map type from which to extract the value type.
 *
 * @returns - The value type of `T`.
 *
 * @example
 * type T0 = MapValues<Map<never, string>>; // string
 * type T1 = MapValues<Map<never, '1' | '2' | '3'>>; // '1' | '2' | '3'
 * type T2 = MapValues<Map<never, { readonly key: string }>>; // { readonly key: string }
 * type T3 = MapValues<Map<never, never>>; // never
 */

export type MapValues<T extends Map<unknown, unknown>> =
  T extends Map<unknown, infer V> ? V : never;
