# ReplaceAll\<String, Pattern, Replacement>

## Overview

The `ReplaceAll<String, Pattern, Replacement>` is a utility type that replaces the all of specified pattern in a string with a given replacement string.

## Syntax

```ts
type ReplaceAll<
  S extends string,
  Pattern extends string,
  Replacement extends string,
> = S extends `${infer Head}${Pattern}${infer Tail}`
  ? `${Head}${Replacement}${ReplaceAll<Tail, Pattern, Replacement>}`
  : S;
```

- **String (S)** : The string in which the replacement will be made.
- **Pattern** : The substring pattern to be replaced.
- **Replacement** : The substring that will replace the pattern.

## Examples

#### Example #1

```ts
type T0 = ReplaceAll<'foo.bar.baz', '.', '/'>; // 'foo/bar/baz'
type T1 = ReplaceAll<'__username__', '__', ''>; // 'username'
type T2 = ReplaceAll<'', 'pattern', 'replacement'>; // ''
```

#### Example #2

```ts
type BaseDateFormat = 'YYYY-MM-DD';
type DateFormatDot = ReplaceAll<BaseDateFormat, '-', '.'>; // 'YYYY.MM.DD'
type DateFormatSlash = ReplaceAll<BaseDateFormat, '-', '/'>; // 'YYYY/MM/DD'
```
