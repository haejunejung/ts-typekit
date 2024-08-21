# Nullish

## Overview

The `Nullish` type indicates the absence of a value or signifies that a variable has not been initialized.

It's purpose is to handle optional properties, variables or function parameters that may no always have a value. It helps enhance the reliability of the code by explicitly handling there `null` or `undefined` cases.

## Syntax

```ts
type Nullish = null | undefined;
```

## Examples

#### Example #1

```ts
type Form = {
  email: string | Nullish;
  password: string | Nullish;
};
```

#### Example #2

```ts
function isNullish(value: unknown): value is Nullish {
  return value === null || value === undefined;
}

const value = [1, 2, 3, null, 5, 6, undefined];

if (value.some(isNullish)) {
  throw new TypeError('there is a null or undefined type.');
}
```
