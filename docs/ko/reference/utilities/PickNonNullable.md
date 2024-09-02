# PickNonNullable\<T, K>

## 개요

선택된 키에 대해 `null`과 `undefined`를 제거하여 `NonNullable`로 변환하고, 나머지 타입은 변경되지 않은 상태를 유지하는 새로운 타입을 생성해요.

## 문법

```ts
type PickNonNullable<T, K extends keyof T> = Simplify<
  Omit<T, K> & { [P in K]: NonNullable<T[P]> }
>;
```

- **T** - 키를 선택할 원본 타입이에요.
- **K** - 원본 타입 `T`에서 `NonNullable`을 적용할 속성의 키예요.

## 예제

```ts
type SomeType = {
  readonly a: number | null | undefined;
  b: boolean;
  c: string;
};

type SomeNonNullableType = PickNonNullable<SomeType, 'a'>;
// {
//   readonly a: number;
//   b: boolean;
//   c: string;
// }
```
