# IsUnion\<T>

## Overview

A type that determines whether the given type is a union.

## Syntax

```ts
export type IsUnion<T, U = T> =
  IsNever<T> extends true
    ? false
    : T extends any
      ? IsEqual<T, U> extends true
        ? false
        : true
      : false;
```

- **T**: The type to check.
- **U** - A copy of the original type `T` used for comparison.

## Examples

```ts
type T0 = IsUnion<[]>; // false
type T1 = IsUnion<null>; // false
type T2 = IsUnion<number>; // false

type T3 = IsUnion<number | string>; // true
type T4 = IsUnion<'foo' | 'bar'>; // true
```
