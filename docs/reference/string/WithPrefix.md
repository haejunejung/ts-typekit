# WithPrefix\<BaseString, Prefix>;

## Overview

The `WithPrefix` type creates a new string type by prepending a specified prefix to an existing string type. This enables automatic addition of a consistent prefix to string types.

## Syntax

```ts
type WithPrefix<
  BaseString extends string,
  Prefix extends string,
> = `${Prefix}${BaseString}`;
```

- **BaseString**: The base string type to which the prefix will be added.
- **Prefix**: The prefix to be added.

## Examples

#### Example #1

```ts
type FormEventNames = 'submit' | 'reset' | 'change';
type CapitalizedFormEventNames = Capitalize<FormEventNames>;
type FormEventHandlers = WithPrefix<CapitalizedFormEventNames, 'on'>;
// Result: "onSubmit" | "onReset" | "onChange";
```
