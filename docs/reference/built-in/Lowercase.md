# Lowercase\<StringType>

:::info
The `Lowercase<StringType>` utility type is available starting from TypeScript version 4.1. For more information see in [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#lowercasestringtype), [Release Note](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/)
:::

## Overview

The `Lowercase<StringType>` utility type in TypeScript is used to convert each character in the string to the lowercase version.

## Syntax

```ts
type Lowercase<S extends string> = intrinsic;
```

- **StringType (S)**: The string that you want to convert each character in the string to the lowercase version.

## Examples

#### Example #1

```ts
type Greeting = 'Hello, world';
type QuietGreeting = Lowercase<Greeting>; // 'hello, world'

type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`;
type MainID = ASCIICacheKey<'MY_APP'>; // 'id-my_app'
```

#### Example #2

```ts
type Environment = 'DATABASE_URL' | 'NODE_ENV' | 'PORT';
type LowercaseEnvironment = Lowercase<Environment>;

const env: Record<LowercaseEnvironment, string> = {
  database_url: 'mongodb://localhost:27017/db',
  node_env: 'development',
  port: '8000',
};
```
