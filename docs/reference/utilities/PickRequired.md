# PickRequired\<T, K>

## Overview

Creates a new type where the specified keys are made required, while keeping the rest of the type remain unchanged.

## Syntax

```ts
type PickRequired<T, K extends keyof T> = Simplify<
  Omit<T, K> & Required<Pick<T, K>>
>;
```

- **T** - The original type from which keys are being picked.
- **K** - The keys from the original type `T` that should be made required.

## Examples

#### Example #1

```ts
type Post = {
  id: number;
  authorId: number;
  role: 'seller' | 'buyer';
  price?: number;
};

type PriceRequiredPost = PickRequired<Post, 'price'>;
// {
//   id: number;
//   authorId: number;
//   role: 'seller' | 'buyer';
//   price: number;
// }
```
