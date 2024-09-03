# MapValues\<T>

## 개요

주어진 Map 타입 `T`로 부터 값의 타입을 추출해요.

## 문법

```ts
type MapValues<T extends Map<unknown, unknown>> =
  T extends Map<unknown, infer V> ? V : never;
```

- **T**: 값의 타입을 추출할 Map 타입이에요.

## 예제

```ts
type T0 = MapValues<Map<never, string>>; // string
type T1 = MapValues<Map<never, '1' | '2' | '3'>>; // '1' | '2' | '3'
type T2 = MapValues<Map<never, { readonly key: string }>>; // { readonly key: string }
type T3 = MapValues<Map<never, never>>; // never
```
