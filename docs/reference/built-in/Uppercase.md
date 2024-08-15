# Uppercase\<StringType>

:::info
The `Uppercase<StringType>` utility type is available starting from TypeScript version 4.1. For more information see in [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype), [Release Note](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/)
:::

## Overview

The `Uppercase<StringType>` utility type in TypeScript is used to convert each character in the string to the uppercase version.

## Syntax

```ts
type Uppecase<S extends string> = intrinsic;
```

- **StringType (S)**: The string that you want to convert each character in the string to the uppercase version.

## Examples

#### Example #1

```ts
type Greeting = 'Hello, world';
type ShoutyGreeting = Uppercase<Greeting>; // "HELLO, WORLD"

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
type MainID = ASCIICacheKey<'my_app'>; // "ID-MY_APP"
```

#### Example #2

```ts
type HttpMethod = 'get' | 'post' | 'patch' | 'delete';

type ErrorMessageTypes = {
  [Method in HttpMethod as Uppercase<Extract<Method, string>>]?: { [Pattern: string]: string };
};

const errorMessages: ErrorMessageTypes = {
  GET: {
    '/posts': 'Failed to retrieve posts.',
    '/posts/:id': 'Failed to retrieve the specific post.',
  },
  // POST, PATCH, DELETE
};
```
