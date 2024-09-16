# PickWritable<T, K>

## 개요

선택된 키를 수정가능하도록 만들고 나머지 타입은 변경되지 않은 상태를 유지하는 새로운 타입을 생성해요.

## 문법

```ts
type PickWritable<T, K extends keyof T> = Simplify<
  Omit<T, K> & { -readonly [P in K]: T[P] }
>;
```

## 예제

```ts
type T0 = { readonly a: string; readonly b: number; readonly c: boolean };
type E0 = PickWritable<T0, 'a'>; // { a: string, readonly b: number, readonly c: boolean}
type E1 = PickWritable<T0, 'a' | 'b'>; // { a: string, b: number, readonly c: boolean }
type E2 = PickWritable<T0, 'a' | 'b'>; // { a: string, b: number, c: boolean }
```
