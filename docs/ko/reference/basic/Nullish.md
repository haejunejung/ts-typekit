# Nullish

## 개요

`Nullish` 타입은 값이 없거나 변수가 초기화 되지 않았음을 나타내요.

`Nullish`의 목적은 항상 값을 가질 수 없는 선택적 속성, 변수, 혹은 함수의 매개변수를 다루기 위해서 사용돼요. 이는 `null` 혹은 `undefined` 경우를 명시적으로 처리하여 코드의 신뢰성을 향상시키는데 도움을 줄 수 있어요.

## 문법

```ts
type Nullish = null | undefined;
```

## 예제

#### 예제 #1

```ts
type Form = {
  email: string | Nullish;
  password: string | Nullish;
};
```

#### 예제 #2

```ts
function isNullish(value: unknown): value is Nullish {
  return value === null || value === undefined;
}

const value = [1, 2, 3, null, 5, 6, undefined];

if (value.some(isNullish)) {
  throw new TypeError('there is a null or undefined type.');
}
```
