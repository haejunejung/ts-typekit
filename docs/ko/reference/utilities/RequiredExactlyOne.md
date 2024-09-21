# RequiredExactlyOne\<T, K>

## 개요

지정된 키 중 정확히 하나를 필수로 만들고, 나머지 지정된 키는 never로 설정하며, 나머지 타입은 변경되지 않는 새로운 타입을 생성해요

## 문법

```ts
type RequiredExactlyOne<T, K extends keyof T> = Simplify<
  Omit<T, K> &
    {
      [P in K]: Required<Pick<T, P>> & Partial<Record<Exclude<K, P>, never>>;
    }[K]
>;
```

- **T**: 키를 선택할 원본 타입이에요.
- **K**: 원본 타입 T에서 필수로 설정될 키와 never로 설정될 나머지 키를 포함하는 키의 집합이에요.

## 예제

```ts
type T0 = {
  a?: number;
  b: string;
  c: boolean;
};
type E0 = RequiredExactlyOne<T0, 'a'>; // { a: number; b: string; c: boolean }

type T1 = {
  a?: number;
  b: string;
  c: boolean;
};
type E1 = RequiredExactlyOne<T1, 'a' | 'b'>; // { a: number; b?: never; c: boolean } | { a?: never; b: string; c: boolean }

type T2 = {
  a: number;
  b: string;
  c: boolean;
};
type E2 = RequiredExactlyOne<T2, 'a' | 'b'>; // { a: number; b?: never; c: boolean } | { a?: never; b: string; c: boolean }
```
