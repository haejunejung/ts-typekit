# UnionToIntersection\<U>

## 개요

분배 조건부 타입을 사용하여 유니온 타입을 교차 타입으로 변환해요.

## 문법

```ts
type InternalUnionToIntersection<U> = (
    U extends unknown ? (x: U) => void : never
) extends (x: inter I) => void
    ? I & U
    : never;

type SimplifyIfRecord<T> =
    T extends Record<PropertyKey, unknown> ? Simplify<T> : T;

type UnionToIntersection<U> =
    IsNever<U> extends true
        ? never
        : SimplifyIfRecord<InternalUnionToIntersection<U>>;
```

- **U**: 교차 타입으로 변환될 유니온 타입이에요.

## 예제

```ts
// T0: Object literal union
type T0 = { a: number } | { b: string };
type E0 = UnionToIntersection<T0>; // { a: number; b: string; }

// T1: Union of object literal and simple type
type T1 = { a: number } | 'A';
type E1 = UnionToIntersection<T1>; // { a: number } & 'A'

// T2: Combination of object literal, function, and tuple
type T2 = { a: number } | (() => void) | [number];
type E2 = UnionToIntersection<T2>; // { a: number } & (() => void) & [number]

// T3: Union of function types
type T3 = (() => string) | ((x: number) => number);
type E3 = UnionToIntersection<T3>; // (() => string) & ((x: number) => number)

// T4: Union of tuple types
type T4 = [number] | [string];
type E4 = UnionToIntersection<T4>; // [number] & [string]

// T5: Nested object literal
type T5 = { a: { b: string } } | { a: { c: number } };
type E5 = UnionToIntersection<T5>; // { a: { b: string } & { c: number } }

// T6: Union of object literal and tuple
type T6 = { a: number } | [string];
type E6 = UnionToIntersection<T6>; // { a: number } & [string]

// T7: Combination of object literal, primitive type, and tuple
type T7 = { a: string } | 'B' | [number];
type E7 = UnionToIntersection<T7>; // { a: string } & 'B' & [number]

// T8: Simple union type (not an object)
type T8 = 'A' | 'B' | 'C' | 'D' | 'E';
type E8 = UnionToIntersection<T8>; // never
```
