# IsArray\<T>

## Overview

A type that determines whether the given type is an array type.

## Syntax

```ts
type IsArray<T> = T extends any[] | readonly any[] ? true : false;
```

- **T** : The type to check.

## Examples

#### Example #1

```ts
// `true` cases
type T0 = IsArray<[]>; // true
type T1 = IsArray<number[]>; // true
type T2 = IsArray<readonly []>; // true
type T3 = IsArray<Array<number>>; // true
type T4 = IsArray<ReadonlyArray<number>>; // true
```

#### Example #2

```ts
// `false` cases.
type T0 = IsArray<number>; // false
type T1 = IsArray<{}>; // false
type T2 = IsArray<null>; // false
type T3 = IsArray<undefined>; // false
type T4 = IsArray<Record<number, any>>; // false
type T5 = IsArray<Function>; // false
```
