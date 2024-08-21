# ExtractRouteParams\<Route, ParamType>

## Overview

This type is designed to extract parameter definitions from a route pattern, considering various constraints and modifiers. It processes route strings that adhere to specific patterns and accommodates different parameter modifiers to accurately define parameters in TypeScript.

- **? (Optional Parameter)**: Indicates that the parameter is optional and may or may not be present.
- **\* (Zero or More Repeating Paramters)**: Indicates that the parameter can appear zero or more times.
- **+ (One or More Repeating Parameters)**: Indicates that the parameter must appear one or more times.
- **'' (Default Required Parameter)**: Indicates that the paramter is required and must appear exactly once.

## Syntax

This type of syntax is rather long and complex. If you want to know more, please check [Implementation](https://github.com/haejunejung/ts-typekit/blob/main/source/url-parser/ExtractRouteParams.d.ts)

```ts
export type ExtractRouteParams<
  Route extends string,
  ParamType = string | number | boolean,
>;
```

- **Route**: The route pattern string.
- **ParamType**: The type of the parameter values.

## Examples

#### Example #1

```ts
type T0 = ExtractRouteParams<'/users/:userId/posts/:postId'>;
// Result: { userId: string } & { postId: string }

type T1 = ExtractRouteParams<'/users/:userId/posts/:postId', number>;
// Result: { userId: number } & { postId: number }

type T2 = ExtractRouteParams<'/users/:userId(\\d+)', number>;
// Result: { userId: number }

type T3 = ExtractRouteParams<'/search/:query+'>;
// Result: { query: string }

type T4 = ExtractRouteParams<'/items/:itemId/:category?'>;
// Result: { itemId: string } & { category?: string }
```

#### Example #2

```ts
function buildLink<Route extends string>(
  template: Route,
  params: ExtractRouteParams<Route, number>
): string {
  return template.replace(/:([a-zA-Z0-9_]+)/g, (_, key) => {
    const value = params[key as keyof typeof params];

    if (value !== undefined && value !== null) {
      return value.toString();
    }

    throw new Error(`Missing parameter: ${key}`);
  });
}

const url = buildLink('/users/:userId/products/:productId', {
  userId: 1,
  productId: 2,
});
// Result: '/users/1/products/2'
```
