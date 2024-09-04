/**
 * @description - Convert a array/tuple into a union type of its elements.
 *
 * @template T - The array/tuple type to convert.
 *
 * @returns - The union type of T's elements.
 *
 * @example
 * type T0 = TupleToUnion<['a', 'b', 'c']>; // 'a' | 'b' | 'c'
 * type T1 = TupleToUnion<[1, 'a', true]>; // 1 | 'a' | true
 * type T2 = TupleToUnion<[{ key: 'value1' }, { key: 'value2' }}]>; // { key: "value1";} | { key: "value2";}
 */
export type TupleToUnion<T> = T extends readonly unknown[] ? T[number] : never;
