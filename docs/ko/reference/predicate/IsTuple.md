# IsTuple\<T>

## Overview

주어진 타입이 튜플 타입인지 여부를 판별하는 타입이에요.

## Syntax

```ts
type IsTuple<T> = T extends any[] | readonly any[]
  ? number extends T['length']
    ? false
    : true
  : false;
```

- **T**: 검사할 타입이에요.

## Examples

#### Example #1

```ts
type T0 = IsTuple<[]>; // true
type T1 = IsTuple<[number]>; // true
type T2 = IsTuple<[number, string]>; // true

type T3 = IsTuple<any[]>; // false
type T4 = IsTuple<unknown[]>; // false
type T5 = IsTuple<number[]>; // false
type T6 = IsTuple<Array<number>>; // false
type T7 = IsTuple<ReadonlyArray<number>>; // false
```
