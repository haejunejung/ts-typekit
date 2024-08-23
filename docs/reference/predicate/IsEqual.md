# IsEqual\<A, B>

## Overview

Returns a boolean for whether the two given types are equal.

## Syntax

```ts
type IsEqual<A, B> =
  (<G>() => G extends A ? 1 : 2) extends <G>() => G extends B ? 1 : 2
    ? true
    : false;
```

- **A**: The first type to compare.
- **B**: The second type to compare.

## Examples

#### Example #1

```ts
type T0 = IsEqual<number, number>; // true
type T1 = IsEqual<'1', '1'>; // true
type T2 = IsEqaul<string, number>; // false
```
