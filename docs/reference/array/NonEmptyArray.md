# NonEmptyArray\<T>

## Overview

Represents an array that is guaranteed to contain at least one element of type T.

## Syntax

```ts
type NonEmptyArray<T = unknown> = [T, ...T[]];
```

- **T**: The type of elements contained in the array.

## Example

```ts
// Using NonEmptyArray with a string type:
type stringArray = NonEmptyArray<string> = ['1', '2', '3'];

// Using NonEmptyArray with a number type:
type numberArray = NonEmptyArray<number> = [1, 2, 3];

// Invalid example (empty array not allowed):
// Error: Type '[]' is not assignable to the type 'NonEmptyArray<number>'.
const emptyArray: NonEmptyArray<number> = [];
```
