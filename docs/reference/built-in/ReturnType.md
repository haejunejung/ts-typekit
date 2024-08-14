# ReturnType\<Type>

:::info
The `Parameters<Type>` utility type is available starting from TypeScript version 3.1. For more information see in [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype), [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#tuples-in-rest-parameters-and-spread-expressions).
:::

## Overview

The `ReturnType<Type>` utility type in TypeScript extracts the return type of a function type `Type`. It allows you to obtain and reuse the return type of a function without manually specifying it, ensuring consistency and reducing duplication in your code.

## Syntax

```ts
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;
```

- **Type (T)**: This represents a type from which return type is extracted.

## Examples

#### Example #1

```ts
type T0 = ReturnType<() => string>; // string
type T1 = ReturnType<(a: number) => string>; // string
type T2 = ReturnType<<T>() => T>; // unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
type T4 = ReturnType<() => { a: number; b: number }>; // {a: number, b: number}
type T5 = ReturnType<any>; // any
type T6 = ReturnType<never>; // never
type T7 = ReturnType<string>; // ❌
// Type 'string' does not satisfy the constraint '(...args: any) => any'.

type T8 = ReturnType<unknown>; // ❌
// Type 'unknown' does not satisfy the constraint '(...args: any) => any'.

type T9 = ReturnType<Function>; // ❌
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.
```

#### Example #2

```ts
function mapIterable<Item, Mapper extends (item: Item) => any, Result extends ReturnType<Mapper>>(
  items: Iterable<Item>,
  callback: Mapper
): Result[] {
  const results: Result[] = [];

  for (const item of items) {
    results.push(callback(item));
  }

  return results;
}

const array: number[] = [1, 2, 3];
const squaredArray = mapIterable(array, (item: number) => item * item);
// The callback squares each number, so `squaredArray` is of type `number[]`.

const setObj: Set<string> = new Set(['foo', 'bar', 'baz']);
const lengths = mapIterable(setObj, (item: string) => item.length);
// The callback returns the length of each string, so `lengths` is of type `number[]`.

const mapObj: Map<string, number> = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);
const KeyValueStrings = mapIterable(mapObj, ([key, value]: [string, number]) => {
  return `${key}: ${value}`;
});
// The callback returns a string combining the key and value, so `KeyValueStrings` is of type `string[]`.
```
