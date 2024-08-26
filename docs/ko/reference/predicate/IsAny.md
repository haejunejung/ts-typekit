# IsAny\<T>

## 개요

주어진 타입이 `any` 타입인지 여부를 판별하는 타입이에요.

## 문법

```ts
type IsAny<T> = 0 extends 1 & T ? true : false;
```

- **T**: 검사할 타입이에요.

## 예제

#### 예제 #1

```ts
// Returns `true` if the given type is `any` type.
type T0 = IsAny<any>; // true

// Otherwise returns `false`.
type T1 = IsAny<never>; // false
type T2 = IsAny<unknown>; // false
type T4 = IsAny<null>; // false
type T5 = IsAny<undefined>; // false
type T3 = IsAny<number>; // false
type T6 = IsAny<string>; // false
type T7 = IsAny<boolean>; // false
type T8 = IsAny<[]>; // false
```
