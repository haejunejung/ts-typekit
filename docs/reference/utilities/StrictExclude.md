# StrictExclude\<BaseType, ExcludedMembers>

## Overview

This type is a stricter version of TypeScript's `Exclude` utility type.

Unlike `Exclude`, which allows excluded members not present on the given type,
`StrictExclude` ensures that only members actually present in the type can be excluded.

## Syntax

```ts
type StrictExclude<BaseType, ExcludedMembers extends BaseType> = Exclude<
  BaseType,
  ExcludedMembers
>;
```

- **BaseType**: The type from which you want to exclude union members.
- **ExcludedMembers**: The members or types that you want to exclude from `BaseType`.

## Examples

#### Example #1

```ts
type Example = 'admin' | 'editor' | 'viewer';
type StrictExcludedExample = StrictExclude<Example, 'admin'>;
// Result: "editor" | "viewer"
```

:::tip
If your team is using ESLint and wants to enforce the use of `StrictExclude` instead of the standard `Exclude`, you can configure ESLint to help catch this. The `@typescript-eslint/ban-types` rule can be configured to display an error message when `Exclude` is used, guiding developers to use `StrictExclude` instead. Here's how you can set up your ESLint configuration:

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
          Exclude: 'Use StrictExclude instead',
        },
        extendsDefaults: true,
      },
    ],
  },
};
```

:::
