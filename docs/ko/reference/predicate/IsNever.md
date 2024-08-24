# IsNever\<T>

## 개요

주어진 타입이 never 타입인지 여부를 판별하는 타입이에요.

## 구문

```ts
type IsNever<T> = [T] extends [never] ? true : false;
```

- **T** : 검사할 타입이에요.

## 예제

#### 예제 #1

```ts
type T0 = IsNever<never>; // true
type T1 = IsNever<'a' & never>; // true
type T2 = IsNever<number>; // false
type T3 = IsNever<null>; // false
type T4 = IsNever<any>; // false
type T5 = IsNever<undefined>; // false
```
