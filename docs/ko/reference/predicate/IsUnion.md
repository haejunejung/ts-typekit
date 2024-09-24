# IsUnion\<T>

## 개요

주어진 타입이 union 타입인지 여부를 판별하는 타입이에요.

## 문법

```ts
export type IsUnion<T, U = T> =
  IsNever<T> extends true
    ? false
    : T extends any
      ? IsEqual<T, U> extends true
        ? false
        : true
      : false;
```

- **T**: 검사할 타입이에요.
- **U** - 비교를 위한 `T`의 복제 타입이에요.

## 예제

```ts
type T0 = IsUnion<[]>; // false
type T1 = IsUnion<null>; // false
type T2 = IsUnion<number>; // false

type T3 = IsUnion<number | string>; // true
type T4 = IsUnion<'foo' | 'bar'>; // true
```
