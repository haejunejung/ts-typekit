# IsUnknown\<T>

## Overview

A type that determines whether the given type is a unknown.

## Syntax

```ts
type IsUnknown<T> = unknown extends T
  ? IsAny<T> extends true
    ? false
    : true
  : false;
```

- **T**: The type to check.

## Examples

```ts
// Should be `true` if the given type is `unknown`.
type T0 = IsUnknown<unknown>; // true

// Should be `false` otherwise.
type T1 = IsUnknown<any>; // false
type T2 = IsUnknown<never>; // false
type T3 = IsUnknown<number>; // false
type T4 = IsUnknown<unknown[]>; // false
type T5 = IsUnknown<void>; // false
type T6 = IsUnknown<null>; // false
type T7 = IsUnknown<undefined>; // false
```
