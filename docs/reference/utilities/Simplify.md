# Simplify\<T>

## Overview

The `Simplify` utility type is needed to simplify union TypeScript types by resolving properties into a single structure.

It takes a type `T` and returns a new type where all the properties of `T` are retained but any union structures are resolved into a straightforward, plain object type.

This can be particulary useful when dealing with intersection types that might result in verbose or hard-to-read type definitions.

## Syntax

```ts
type Simplify<T> = { [Key in keyof T]: T[Key] } & {};
```

- **T**: The type you want to simplify.

## Examples

```ts
type Crendentials = {
  email: string;
  password: string;
};

type UserInfo = {
  username: string;
  age: number;
  gender: 'M' | 'F';
};

type CreateUserRequest = Simplify<Credentials & UserInfo>;
// If not using `Simplify`, then IDE shows `Credentials & UserInfo`.

// However, the simplified result will be:
// {
//   email: string;
//   password: string;
//   username: string;
//   age: number;
//   gender: 'M' | 'F';
// }
```
