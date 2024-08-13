# Omit\<Type, Keys>

:::info
The `Omit<Type, Keys>` utility type is available starting from TypeScript version 3.5. For more information see in [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys), [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-5.html#the-omit-helper-type).
:::

## Overview

The `Omit<Type, Keys>` contructs a type by picking all properties from `Type` and then removing `Keys` (string literal or union of string literals). The opposite of `Pick`.

## Syntax

```ts
type Omit<T, K extends keyof any> = { [P in keyof Exclude<keyof T, K>]: T[P] };
```

- **Type (T)**: The original type from which you want to omit some properties. This is the type that contains the properties you are interested in modifying.
- **Keys (K)**: A union of the property names that you want to exclude from the original type. These are the property names that you want to remove from the original type.

## Examples

#### Example #1

```ts
interface Thumbnail {
  image: string;
  title: string;
  description: string;
  author: string;
  tags: string[];
  details: string[];
}

type ThumbnailPreview = Omit<Thumbnail, 'details'>;
// it is equivalent to
// type ThumbnailPreview = {
//     image: string;
//     title: string;
//     description: string;
//     author: string;
//     tags: string[];
// }
```

#### Example #2

```ts
function omit<T extends Record<PropertyKey, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const reslt = { ...obj };

  for (const key of keys) {
    delete result[key];
  }

  return result as Omit<T, K>;
}
```

#### Example #3

```ts
interface ApiResponse<T> {
  status: number;
  data: T;
  error?: string;
}

type Payload<T> = Omit<ApiResponse<T>, 'status' | 'error'>;

interface User {
  id: string;
  name: string;
  email: string;
}

async function fetchUser(userId: string): Promise<Payload<User>> {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const apiResponse: ApiResponse<User> = await response.json();

    if (apiResponse.status === 200) {
      return {
        data: apiResponse.data,
      };
    } else {
      throw new Error('Failed to fetch user data');
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}
```
