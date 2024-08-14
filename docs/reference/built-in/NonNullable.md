# NonNullable\<Type>

:::info
The `NonNullable<Type>` utility type is available starting from TypeScript version 2.8. For more information see in [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype), [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types).
:::

## Overview

The `NonNullable<Type>` is a built in utility type in TypeScript that constructs a type by excluding `null` and `undefined` from `Type`. This feature is particulary useful in situations where developers need to ensure that a variable will always have a value, thus eliminating the uncertainly associated with nullable types.

## Syntax

```ts
type NonNullable<T> = T extends null | undefiend ? never : T;
```

- **Type (T)**: This represents a type from which you want to exclude `null` and `undefined`.

## Examples

#### Example #1

```ts
type T0 = NonNullable<string | number | undefined>; // string | number
type T1 = NonNullable<string | string[] | null | undefined>; // string | string[]
type T2 = NonNullable<string | string[] | null>; // string | string[]
```

#### Example #2

```ts
function isNotNullish<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}
```

#### Example #3

```ts
type FulfilledForm<T> = { [K in keyof T]: NonNullable<T[K]> };

function isFullyFilled<T extends object>(form: T): form is FulfilledForm<T> {
  return Object.values(form).every(value => value !== null && value !== undefined);
}

interface RecruitForm {
  name: string | null;
  age: number | null;
  role: 'admin' | 'editor' | 'viewer' | null;
  hobby: string[] | null;
  university: string | null;
}

class EmployeeApiService {
  private static readonly API_URL = '/api/employee';

  async create(form: FulfilledForm<RecruitForm>): Promise<void> {
    // Implementation will create employee
  }

  async recruit(form: RecruitForm): Promise<void> {
    // The isFullyFilled returns true if and only if all fields in the form are neither null nor undefined.
    // Therefore, after this function call, TypeScript infers the type of form as FulfilledForm<RecuritForm>.
    if (isFullyFilled(form)) {
      // TypeScript infers the type of form here as FulfilledForm<RecruitForm>.
      // This means that all fields in form are guaranteed to have non-null and non-undefined values.
      try {
        await this.create(form);
      } catch (error) {
        // Error handling needed.
      }
    } else {
      // In this block, TypeScript still infers the type of form as RecruitForm.
      // This means that form could still contain null or undefined values in some of its fields.
      // This block should handle cases where the form is incomplete.
    }
  }
}
```
