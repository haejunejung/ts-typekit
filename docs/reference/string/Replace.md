# Replace\<String, Pattern, Replacement>

## Overview

The `Replace<String, Pattern, Replacement>` is a utility type that replaces the first occurrence of a specified pattern in a string with a given replacement string.

## Syntax

```ts
export type Replace<
  S extends string,
  Pattern extends string,
  Replacement extends string,
> = S extends `${infer Head}${Pattern}${infer Tail}`
  ? `${Head}${Replacement}${Tail}`
  : S;
```

- **String (S)** : The string in which the replacement will be made.
- **Pattern** : The substring pattern to be replaced.
- **Replacement** : The substring that will replace the pattern.

## Examples

#### Example #1

```ts
type T0 = Replace<'hello world', 'world', 'typescript'>; // 'hello typescript'
type T1 = Replace<'bar bar baz', 'bar', 'foo'>; // 'foo bar baz'
type T2 = Replace<'', 'pattern', 'replacement'>; // ''
```

#### Example #2

```ts
type FieldTemplate = '{fieldName}_field';
type FieldPlaceholder = '{fieldName}';

type FieldName = 'username' | 'password';
type FieldNames = Replace<FieldTemplate, FieldPlaceholder, FieldName>;
// FieldNames = 'username_field' | 'password_field';
```
