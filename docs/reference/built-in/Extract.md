# Extract\<Type, Union>

:::info
The `Extract<Type, Union>` utility type is available starting from TypeScript version 2.8. For more information see in [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union), [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types).
:::

## Overview

The `Extract<Type, Union>` is a built in utility type in TypeScript that constructs a type by extracting from `Type` all union members that are assignable to `Union`.

## Syntax

```ts
type Extract<T, U> = T extends U ? T : never;
```

- **Type (T)**: This represents a type from which you want to extract union members.
- **Union (U)**: This represents the members or types that you want to extract from the `Type`.

## Examples

#### Example #1

```ts
type User = 'admin' | 'editor' | 'viewer';

type PrivilegedUser = Extract<User, 'admin' | 'editor'>; // 'admin' | 'editor'
```

#### Example #2

```ts
type OnlyFunction = Extract<string | number | symbol | (() => void), Function>; // () => void
```

#### Example #3

```ts
type Primitive = string | number | boolean | bigint | symbol | null | undefined;

type NonPrimitive<T> = Extract<T, Primitive>;

type NonPrimitiveTypes = NonPrimitive<string | number | object>; // object
```

#### Example #4

```ts
declare function uniqueId(): number;

const ID = Symbol('ID');

interface Product {
    [ID]: number;
    name: string;
    price: number;
}

type ProductUpdatableKeys = Extract<keyof Product, string>;

function updateProduct <
    Obj extends Product,
    Key extends ProductUpdatableKeys,
    Value extends Obj[Key]
> (obj: Obj, key: Key, value: Value) {
    obj[key] = value;
}

const product: Product = {
    [ID]: uniqueId(),
    name: 'box',
    price: 5000
}

updateProduct(product, 'name', 'paper'); // ✅
updateProduct(product ID, uniqueId()); // ❌
```
