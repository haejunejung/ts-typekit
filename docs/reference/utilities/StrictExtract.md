# StrictExtract\<BaseType, Subset>

## Overview

This type is stricter version of TypeScript's `Extract` utility type.

Unlike `Extract`, which allows extraction of members not present on the given type,
`StrictExtract` ensures that only members actually present in the type can be extracted.

## Syntax

```ts
export type StrictExtract<BaseType, Subset extends BaseType> = Extract<
  BaseType,
  Subset
>;
```

- **BaseType**: The type from which you want to extract union members.
- **Subset**: The members or types that you want to extract from the `BaseType`.

## Examples

#### Example #1

```ts
type Example = 'admin' | 'editor' | 'viewer';
type StrictExtractedExample = StrictExtract<Example, 'admin' | 'editor'>;
// Result: "admin" | "editor"
```

:::tip
If your team is using ESLint and wants to enforce the use of `StrictExtract` instead of the standard `Extract`, you can configure ESLint to help catch this. The `@typescript-eslint/ban-types` rule can be configured to display an error message when `Extract` is used, guiding developers to use `StrictExtract` instead. Here's how you can set up your ESLint configuration:

```js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // Include other relevant rules here
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Extract: 'Use StrictExtract instead',
        },
        extendsDefaults: true,
      },
    ],
  },
};
```

:::
