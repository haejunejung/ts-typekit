# IsArray\<T>

## 개요

주어진 타입이 배열 타입인지 여부를 판별하는 타입이에요.

## 구문

```ts
type IsArray<T> = T extends any[] | readonly any[] ? true : false;
```

- **T** : 검사할 타입이에요.

## 예제

#### 예제 #1

```ts
// `true` cases
type T0 = IsArray<[]>; // true
type T1 = IsArray<number[]>; // true
type T2 = IsArray<readonly []>; // true
type T3 = IsArray<Array<number>>; // true
type T4 = IsArray<ReadonlyArray<number>>; // true
```

#### 예제 #2

```ts
// `false` cases.
type T0 = IsArray<number>; // false
type T1 = IsArray<{}>; // false
type T2 = IsArray<null>; // false
type T3 = IsArray<undefined>; // false
type T4 = IsArray<Record<number, any>>; // false
type T5 = IsArray<Function>; // false
```
