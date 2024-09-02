# PickNonNullable\<T, K>

## Overview

Creates a new type by converting the selected keys to NonNullable to remove null and undefined, while keeping the rest of the type unchanged.

## Syntax

```ts
type PickNonNullable<T, K extends keyof T> = Simplify<
  Omit<T, K> & { [P in K]: NonNullable<T[P]> }
>;
```

- **T** - The original type from which keys are being picked.
- **K** - The keys from the original type `T` that should be made non-nullable.

## Example

```ts
type SomeType = {
  readonly a: number | null | undefined;
  b: boolean;
  c: string;
};

type SomeNonNullableType = PickNonNullable<SomeType, 'a'>;
// {
//   readonly a: number;
//   b: boolean;
//   c: string;
// }
```
