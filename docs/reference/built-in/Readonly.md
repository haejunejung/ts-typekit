# Readonly\<Type>

:::info
The `Readonly<Type>` utility type is available starting from TypeScript version 2.1. For more information see in [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype), [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#partial-readonly-record-and-pick).
:::

## Overview

`Readonly<Type>` contructs a type with all properties of `Type` set to **readonly**, meaning the properties of the contrcuted type cannot be reassigned.

## Syntax

`Readonlt<Type>` takes a single type parameter, `Type`, which represents the type whose properties you want to make read-only.

```ts
type ReadonlyProps = Readonly<Props>;

```

## Examples

#### Example #1

```ts
interface Person {
    name: string;
    age: number;
};

const user: Readonly<User> = {
    name: "John",
    age: 30,
};

user.name = "Andew";
// Error
// Cannot assign to 'name' because it is a read-only property.
```

#### Example #2

```ts
interface AppConfig {
    apiUrl: string;
    version: string;
}

// Global configuration object used throughout the application.
// Note: The config object is immutable. Changing the properties
//       will result in TypeScript errors.
//       Example of TypeScript error:
//       - config.apiUrl = "https://api.changeurl.com"
//       - config.version = "1.0.1"
const config: Readonly<AppConfig> = {
    apiUrl: 'https://api.example.com',
    version: '1.0.0',
};

type Method = "GET" | "POST" | "PUT" | "DELETE";

async function fetchData <TRequest, TResponse>(
    endPoint: string, method: Method, data?: TRequest
): Promise<TResponse> {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : undefined
    };

    try {
        const response = await fetch(`${config.apiUrl}/${endPoint}`, options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json() as TResponse;
    } catch (error) {
        console.error('Fetch error', error);
        throw error;
    }
}
```