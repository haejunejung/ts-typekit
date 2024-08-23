# IsEqual\<A, B>

## 개요

주어진 두 타입이 동일한지 여부를 나타내는 boolean 값을 반환해요.

## 문법

```ts
type IsEqual<A, B> =
  (<G>() => G extends A ? 1 : 2) extends <G>() => G extends B ? 1 : 2
    ? true
    : false;
```

- **A**: 비교할 첫 번째 타입이에요.
- **B**: 비교할 두 번째 타입이에요.

## 예제

#### 예제 #1

```ts
type T0 = IsEqual<number, number>; // true
type T1 = IsEqual<'1', '1'>; // true
type T2 = IsEqaul<string, number>; // false
```
