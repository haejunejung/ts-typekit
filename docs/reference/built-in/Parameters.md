# Parameters\<Type>

:::info
The `Parameters<Type>` utility type is available starting from TypeScript version 3.0. For more information see in [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype), [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#tuples-in-rest-parameters-and-spread-expressions).
:::

## Overview

The `Parameters<Type>` utility type in TypeScript creates a tuple type from the parameters of a function type `Type`. It allows you to extract and reuse function parameter types elsewhere in your code without manually redefining them.

## Syntax

```ts
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
```

- **Type (T)**: This represents a type from which parameter types are extracted.

## Examples

#### Example #1

```ts
type T0 = Parameters<(a: number) => void>; // [a: number]

type T2 = Parameters<(args: { a: number; b: string }) => void>; // [args: { a: number, b: string}]

type T1 = Parameters<() => void>; // []

type T3 = Parameters<any>; // unknown[]

type T4 = Parameters<never>; // never

type T5 = Parameters<string>; // never
// Type 'string' does not satisfy the constraint '(...args: any) => any'.

type T6 = Parameters<Function>; // never
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.
```

#### Example #2

```ts
function logAndInvoke<F extends (...args: any[]) => any>(func: F): (...args: Parameters<F>) => ReturnType<F> {
  return (...args: Parameters<F>): ReturnType<F> => {
    console.log(
      'Call function with arguments type',
      args.map(arg => typeof arg)
    );
    console.log('Call function with arguments values', args);
    return func(...args);
  };
}

const addFn = (a: number, b: number): number => {
  return a + b;
};

const logging = logAndInvoke(addFn);
// const logging: (a: number, b: number) => number

logging(1, 2);
// [LOG]: "Call function with arguments type",  ["number", "number"]
// [LOG]: "Call function with arguments values",  [1, 2]
```
