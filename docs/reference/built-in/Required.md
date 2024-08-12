# Required\<Type>

:::info
The `Required<Type>` utility type is available starting from TypeScript version 2.8. For more information see in [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype), [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#improved-control-over-mapped-type-modifiers).
:::

## Overview

`Required<Type>` is a built in utility type in TypeScript that contructs a type with all properties of `Type` set to required. This is the opposite of `Partial<Type>`.

## Syntax

```ts
type Required<T> = { [K in keyof T]-?: T[K] };
```

- **Type (T)**: The type whose properties you want to make required.

## Examples

#### Exmaple #1

```ts
interface Props {
    a?: number;
    b?: string;
}

const obj1: Props = { a: 5 };
const obj2: Required<Props> = { a: 5};

// Error
// Property 'b' is missing in type '{ a: number; }'
// but required in type 'Required<Props>'

// Required<Props> is equivalent to the following:
// interface Props {
//     a: number;
//     b: string;
// }
```

#### Exmaple #2

```ts
interface SignUpForm {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
};

type RequiredSignUpForm = Required<SignUpForm>;


function validateSignUpForm (signUpData: RequiredSignUpForm): boolean {
    const requiredFields = ["username", "email", "password", "confirmPassword"];

    for (const field of requiredFields) {
        if (signUpData[field as keyof RequiredSignUpForm] == null) {
            console.error(`Field ${field} is missing`);
            return false;
        } 
    }

    if (signUpData.password !== signUpData.confirmPassword) {
        console.error(`Passwords do not match`);
        return false;
    }

    return true;
}
```