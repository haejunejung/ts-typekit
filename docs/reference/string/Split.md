# Split\<String, Delimiter>

## Overview

The `Split<String, Delimiter>` is a utility type that splits a string into an array of substrings based on a specified delimiter.

## Syntax

```ts
type Split<
  S extends string,
  Delimiter extends string,
> = S extends `${infer Head}${Delimiter}${infer Tail}`
  ? [Head, ...Split<Tail, Delimiter>]
  : S extends Delimiter
    ? []
    : [S];
```

- **String (S)**: The string to be split.
- **Delimiter**: The delimiter used to split the string.

## Examples

#### Example #1

```ts
type T1 = Split<'foo.bar.baz', '.'>; // ['foo', 'bar', 'baz']
type T2 = Split<'foo/bar/baz', '/'>; // ['foo', 'bar', 'baz']
type T3 = Split<'', '/'>; // ['']
```

#### Example #2

```ts
// Type to extract parameters from an API path
// 1. Splits the API path by the '/' delimiter.
//    For example, '/products/:productId/reviews/:reviewId' will be split into ['products', ':productId', 'reviews', ':reviewId'].
// 2. Constructs an object type from the result.
//    The keys are the parameter names (e.g., 'productId', 'reviewId'),
//    and the values are always of type string.
type ExtractParams<ApiPath extends string> =
  Split<ApiPath, '/'> extends (infer Part)[]
    ? { [K in Part extends `${string}:${infer Param}` ? Param : never]: string }
    : {};

// Example API path
type ApiPath = '/products/:productId/reviews/:reviewId';

// Extract parameters from the example API path
type ApiParams = ExtractParams<ApiPath>;

// Resulting type will be:
// type ApiParams = {
//   productId: string;
//   reviewId: string;
// }
```
