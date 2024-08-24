# StrictOmit\<ObjectType, ExcludedKeys>

## Overview

This type is a stricter version of TypeScript's `Omit` utility type.

Unlike `Omit`, which allows omission of keys not present on the given type,
`StrictOmit` ensures that only keys actually present in the type can be omitted.
This provides a more controlled and predictable type manipulation, preventing
unintended omissions of non-existent keys.

## Syntax

```ts
type StrictOmit<
  ObjectType extends object,
  ExcludedKeys extends keyof ObjectType,
> = Pick<ObjectType, Exclude<keyof ObjectType, ExcludedKeys>>;
```

- **ObjectType**: The type from which properties will be omitted.
- **ExcludedKeys**: The keys to be omitted, which must be present in `ObjectType`.

## Examples

#### Example #1

```ts
type Example = {
  a: number;
  b: string;
  c: boolean;
};

type StrictOmittedExample = StrictOmit<Example, 'c'>;
// Result: { a: number; b: string }
```

:::tip
If your team is using ESLint and wants to enforce the use of `StrictOmit` instead of the standard `Omit`, you can configure ESLint to help catch this. The `@typescript-eslint/ban-types` rule can be configured to display an error message when `Omit` is used, guiding developers to use `StirctOmit` instead. Here's how you can set up your ESLint configuration:

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
          Omit: 'Use StrictOmit instead',
        },
        extendsDefaults: true,
      },
    ],
  },
};
```

:::
