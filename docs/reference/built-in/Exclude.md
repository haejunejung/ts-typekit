# Exclude\<UnionType, ExcludedMembers>

:::info
The `Exclude<UnionType, ExcludedMembers>` utility type is available starting from TypeScript version 2.8. For more information see in [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers), [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types).
:::

## Overview

The `Exclude<UnionType, ExcludedMembers>` is a built in utility type in TypeScript that constructs a type be excluding from `UnionType` all union members that are assignable to `ExcludedMembers`.

## Syntax

```ts
type Exclude<T, U> = T extends U ? never : T;
```

- **UnionType (T)**: This represents a union type from which you want to exclude certain members. It is a type that can include multiple possible values or types.
- **ExcludedMembers (U)**: This represents the members or types that you want to exclude from the `UnionType`. It is a type that specifies which members should be removed from the union type.

## Examples

#### Example #1

```ts
type Fruit = Exclude<'apple' | 'banana' | 'orange' | 'pizza' | 'chicken', 'pizza' | 'chicken'>;
// type Fruit = "apple" | "banana" | "orange";
```

#### Example #2

```ts
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; x: number }
  | { kind: 'triangle'; x: number; y: number };

type NonCircleShape = Exclude<Shape, { kind: 'circle' }>;
// type NonCircleShape = { kind: 'square'; x: number } | { kind: 'triangle'; x: number; y: number };
```

#### Example #3

```ts
type Circle = {
  radius: number;
};

type Square = {
  side: number;
};

function notUsingExclude(type: Circle | Square) {
  // Accpets any object with properties from either Circle or Square.
  // No type error occurs here because the union type allows any combination of properties.
}

notUsingExclude({ radius: 5, side: 5 }); // ✅

type PickOne<T> = {
  [K in keyof T]: Record<K, T[K]> & Partial<Record<Exclude<keyof T, K>, undefined>>;
}[keyof T];

function usingExclude(type: PickOne<Circle & Square>) {
  // Accpets an object with exactly one property from Circle & Square.
  // Using PickOne ensures only one property can be defined, while others should be `undefined` or omitted.
}

usingExclude({ radius: 5 }); // ✅
usingExclude({ radius: 5, side: undefined }); // ✅
usingExclude({ side: 5 }); // ✅
usingExclude({ radius: undefined, side: 5 }); // ✅
usingExclude({ radius: 5, side: 5 }); // ❌
```
