# RequiredExactlyOne\<T, K>

## Overview

Creates a new type where exactly one of the specified keys is made required, and the other specified keys are set to never, while keeping the rest of the type unchanged.

## Syntax

```ts
type RequiredExactlyOne<T, K extends keyof T> = Simplify<
  Omit<T, K> &
    {
      [P in K]: Required<Pick<T, P>> & Partial<Record<Exclude<K, P>, never>>;
    }[K]
>;
```

- **T**: The original type from which keys are being picked.
- **K**: The keys from the original type `T` that one of the `K` is made required, and the other specified keys are set to never.

## Example

```ts
type T0 = {
  a?: number;
  b: string;
  c: boolean;
};
type E0 = RequiredExactlyOne<T0, 'a'>; // { a: number; b: string; c: boolean }

type T1 = {
  a?: number;
  b: string;
  c: boolean;
};
type E1 = RequiredExactlyOne<T1, 'a' | 'b'>; // { a: number; b?: never; c: boolean } | { a?: never; b: string; c: boolean }

type T2 = {
  a: number;
  b: string;
  c: boolean;
};
type E2 = RequiredExactlyOne<T2, 'a' | 'b'>; // { a: number; b?: never; c: boolean } | { a?: never; b: string; c: boolean }
```
