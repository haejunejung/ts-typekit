# PickWritable<T, K>

## Overview

Creates a new type where the specified keys are made writable, while keeping the rest of the type remain unchanged.

## Syntax

```ts
type PickWritable<T, K extends keyof T> = Simplify<
  Omit<T, K> & { -readonly [P in K]: T[P] }
>;
```

## Example

```ts
type T0 = { readonly a: string; readonly b: number; readonly c: boolean };
type E0 = PickWritable<T0, 'a'>; // { a: string, readonly b: number, readonly c: boolean}
type E1 = PickWritable<T0, 'a' | 'b'>; // { a: string, b: number, readonly c: boolean }
type E2 = PickWritable<T0, 'a' | 'b'>; // { a: string, b: number, c: boolean }
```
