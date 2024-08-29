# IsUnknown\<T>

## 개요

주어진 타입이 unknown 타입인지 여부를 판별하는 타입이에요.

## 구문

```ts
type IsUnknown<T> = unknown extends T
  ? IsAny<T> extends true
    ? false
    : true
  : false;
```

- **T** : 검사할 타입이에요.

## 예제

```ts
// 주어진 타입이 `unknown`이면 `true`를 반환해요.
type T0 = IsUnknown<unknown>; // true

// 그 외는 `false`를 반환해요.
type T1 = IsUnknown<any>; // false
type T2 = IsUnknown<never>; // false
type T3 = IsUnknown<number>; // false
type T4 = IsUnknown<unknown[]>; // false
type T5 = IsUnknown<void>; // false
type T6 = IsUnknown<null>; // false
type T7 = IsUnknown<undefined>; // false
```
