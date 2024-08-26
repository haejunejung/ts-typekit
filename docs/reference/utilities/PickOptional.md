# PickOptional\<T, K>

## Overview

Creates a new type where the specified keys are made optional, while keeping the rest of the type remain unchanged.

## Syntax

```ts
type PickOptional<T, K extends keyof T> = Simplify<
  Omit<T, K> & Partial<Pick<T, K>>
>;
```

## Examples

#### Example #1

```ts
type User = {
  id: number;
  name: string;
  age: number;
};

type UserIdOptional = PickOptional<User, 'id'>;
// {
//     id?: number;
//     name: string;
//     age: number;
// }
```