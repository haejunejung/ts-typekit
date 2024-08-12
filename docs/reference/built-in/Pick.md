# Pick\<Type, Keys>

:::info
The `Pick<Type, Keys>` utility type is available starting from TypeScript version 2.1. For more information see in [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys), [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#partial-readonly-record-and-pick).
:::

## Overview

`Pick<Type, Keys>` is a built in utility type in TypeScript that contructs a type by picking the set of properties `Keys` from `Type`.

## Syntax

```ts
type Pick<T, K extends keyof T> = { [P in K]: T[P] };
```

- **Type (T)**: This is the existing type from which you want to pick specific properties.
- **Keys (K)**: This is a union of string literal types representing the keys of the properties you want to pick from the Type. The keys are combined using the pipe(|) symbol.

## Examples

#### Example #1

```ts
interface Task {
    title: string;
    description: string;
    completed: boolean;
}

type TaskPreview = Pick<Task, 'title' | 'completed'>;

const task: TaskPreview = {
    title: 'Clean room',
    completed: false
}
```

#### Example #2

```ts
function pick <T extends Record<string, any>, K extends keyof T> (obj: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;

    for (const key of keys) {
        result[key] = obj[key];
    }

    return result;
}
```

#### Example #3

```ts
interface Credential {
    name: string;
    email: string;
    password: string;
}

class AuthService {
    // Method to create a user account
    async create ({ name, email, password }: Credential): Promise<void> {
        // In a real implementation,
        // this would include logic to store the user data in a database.
    }

    // Method to log in a user
    async login ({ email, password }: Pick<Credential, 'email' | 'password'>): Promise<void> {
        // In a real implementation,
        // this would include logic to authenticate the user using email and password.
    }

    // Method to log out a user
    async logout ({ email }: Pick<Credentail, 'email'>): Promise<void> {
        // In a real implementation,
        // this would include logic to end the user session.
    }
}
```