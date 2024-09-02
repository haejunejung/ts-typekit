# PickReadonly\<T, K>

## Overview

Creates a new type where the specified keys are made readonly, while keeping the rest of the type remain unchaged.

## Syntax

```ts
type PickReadonly<T, K extends keyof T> = Simplify<
  Omit<T, K> & Readonly<Pick<T, K>>
>;
```

- **T**: The original type from which keys are being picked.
- **K**: The keys from the original type `T` that should be made readonly.

## Example

```ts
type User = {
  id: number;
  image: string;
  name: string;
  age: string;
  job: string;
  hobby: string[];
};

type SomeReadonlyUser = PickReadonly<User, 'image' | 'name' | 'age' | 'job'>;
// Result will be:
// {
//   id: number;
//   readonly image: string;
//   readonly name: string;
//   readonly age: string;
//   readonly job: string;
//   hobby: string[];
// };
```
