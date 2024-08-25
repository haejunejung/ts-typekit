# IsNever\<T>

## Overview

A type that determines whether the given type is a never.

## Syntax

```ts
type IsNever<T> = [T] extends [never] ? true : false;
```

- **T** : The type to check.

## Examples

#### Example #1

```ts
type T0 = IsNever<never>; // true
type T1 = IsNever<'a' & never>; // true
type T2 = IsNever<number>; // false
type T3 = IsNever<null>; // false
type T4 = IsNever<any>; // false
type T5 = IsNever<undefined>; // false
```
