/**
 * @description - Extracts the key type from a given map type `T`.
 *
 * @template T - The map type from which to extract the key type.
 *
 * @returns - The key type of `T`.
 *
 * @example
 * const phoneBook: Map<'tomas' | 'sha', string> = new Map([
 *  ['tomas': '010-0000-0000'],
 *  ['sha': '010-1111-1111'],
 * ])
 *
 * type PhoneBookKeys = MapKeys<typeof phoneBook>; // 'tomas' | 'sha'
 *
 * const hashMap: Map<string, string> = new Map([
 *  ['0': 'coffee'],
 *  ['1': 'dessert']
 * ])
 *
 * type HashMapKeys = MapKeys<typeof hashMap>; // string
 */
export type MapKeys<T extends Map<unknown, unknown>> =
  T extends Map<infer K, unknown> ? K : never;
