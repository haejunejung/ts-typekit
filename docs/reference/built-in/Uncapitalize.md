# Uncapitalize\<StringType>

:::info
The `Uncapitalize<StringType>` utility type is available starting from TypeScript version 4.1. For more information see in [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uncapitalizestringtype), [Release Note](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/)
:::

## Overview

The `Uncapitalize<StringType>` utility type in TypeScript is used to convert the first character of a string literal type to lowercase, while preserving the remaining characters unchanged. This is particularly useful for tranforming string literal types in a way that aligns with naming conventions or other requirements.

## Syntax

```ts
type Uncapitalize<S extends string> = S extends `${inter F}${inter Rest}` ? `${Lowercase<F>}${Rest}` : S;
```

- **StringType (S)**: The string that you want to convert the first character to an lowercase equivalent.

## Examples

#### Example #1

```ts
type UppercaseGreeting = 'HELLO WORLD';
type UncomfortableGretting = Uncapitalize<UppercaseGreeting>; // 'hELLO WORLD'

type PascalCase = 'PascalCase';
type CamelCase = Uncapitalize<PascalCase>; // 'pascalCase'
```

#### Example #2

```ts
type ConfigOptions = 'MaxConnections' | 'TimeoutDuration' | 'RetryAttempts';

type ConfigKeys = Uncapitalize<ConfigOptions>;

const config: Record<ConfigKeys, number> = {
  maxConnections: 100,
  timeoutDuration: 5000,
  retryAttempts: 3,
};
```
