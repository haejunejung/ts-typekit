# NonEmptyArray\<T>

## 개요

T 타입의 요소를 적어도 하나를 포함하는 배열을 나타내요.

## 문법

```ts
type NonEmptyArray<T = unknown> = [T, ...T[]];
```

- **T**: 배열에 포함된 요소의 타입이에요.

## 예제

```ts
// Using NonEmptyArray with a string type:
type stringArray = NonEmptyArray<string> = ['1', '2', '3'];

// Using NonEmptyArray with a number type:
type numberArray = NonEmptyArray<number> = [1, 2, 3];

// Invalid example (empty array not allowed):
// Error: Type '[]' is not assignable to the type 'NonEmptyArray<number>'.
const emptyArray: NonEmptyArray<number> = [];
```
