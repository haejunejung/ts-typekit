# TupleToUnion\<T>

## Overview

배열 혹은 튜플을 유니온 타입으로 변환해요.

## 문법

```ts
type TupleToUnion<T> = T extends readonly unknown[] ? T[number] : never;
```

- **T**: 변환할 배열 혹은 튜플 타입이에요.

## 예제

```ts
type T0 = TupleToUnion<['a', 'b', 'c']>; // 'a' | 'b' | 'c'
type T1 = TupleToUnion<[1, 'a', true]>; // 1 | 'a' | true
type T2 = TupleToUnion<[{ key: 'value1' }, { key: 'value2' }]>; // { key: "value1";} | { key: "value2";}
```
