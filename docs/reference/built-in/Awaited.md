# Awaited\<Type>

:::info
The `Awaited<Type>` utility type is available starting from TypeScript version 4.5. For more information see in [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype), [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#the-awaited-type-and-promise-improvements).
:::

## Overview

`Awaited<Type>` is a built in utility type in TypeScript that extracts the type of a value that a `Promise` resolves to. It is particularly useful when working with asynchronous operations where you need to determine the final result type after resolved.

## Syntax

It takes one type parameter, which is the `Type` representing the `Promise` from which you want to extract the resolved type.

## Examples

#### Example #1

```ts
type A = Awaited<Promise<string>>;
// type A = string

type B = Awaited<Promise<Promise<number>>>;
// type B = number

type C = Awaited<boolean | Promise<number>>;
// type C = boolean | number
```

#### Example #2

```ts
async function nestedPromise(): Promise<Promise<boolean>> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        new Promise<boolean>(resolve => {
          setTimeout(() => {
            resolve(true);
          }, 1000);
        })
      );
    }, 1000);
  });
}

type NestedPromise = Awaited<ReturnType<typeof nestedPromise>>;
// type NestedPromise = boolean

type NestedPromiseWithoutAwaited = ReturnType<typeof nestedPromise>;
// type NestedPromiseWithoutAwaited = Promise<Promise<boolean>>
```

#### Example #3

```ts
interface User {
  id: number;
  name: string;
  age: number;
}

class UserApiService {
  async fetchUser(userId: number): Promise<User> {
    // Fetch the user data from the database.
    // The actual implementation might look like this:
    // const response = await fetch(`/api/user/${userId}`);
    // const data = response.json();
    // return data;

    return { id: 1, name: 'John Doe', age: 30 };
  }
}

type FetchedUser = Await<ReturnType<UserApiService['fetchUser']>>;

async function handleUserData(apiService: UserApiService, userId: number) {
  try {
    const user: FetchedUser = await apiService.fetchUser(userId);
    // After fetching user data, you can perfrom various actions such as
    // updating the user interface, caching the data for future user,
    // or making additional API requests as needed.
  } catch (error) {
    // error handling
  }
}

const userApiService = new UserApiService();
handleUserData(userApiService, 1);
```
