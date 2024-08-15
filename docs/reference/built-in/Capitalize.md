# Capitalize\<StringType>

:::info
The `Capitalize<StringType>` utility type is available starting from TypeScript version 4.1. For more information see in [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype), [Release Note](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/)
:::

## Overview

The `Capitalize<StringType>` utility type capitalizes the first letter of a string literal type while keeping the remaining characters unchanged.

## Syntax

```ts
type Capitalize<S extends string> = S extends `${inter F}${inter Rest}` ? `${Uppercase<F>}${Rest}` : S;
```

- **StringType (S)**: The string that you want to convert the first character to an uppercase equivalent.

## Examples

#### Example #1

```ts
type LowercaseGreeting = 'hello, world';
type Greeting = Capitalize<LowercaseGreeting>; // 'Hello, world'
```

#### Example #2

```ts
type FormEventNames = 'submit' | 'reset' | 'change' | 'input' | 'focus' | 'blur' | 'invalid';
type CapitalizedFormEventNames = Capitalize<FormEventNames>; // 'Submit' | 'Reset' | 'Change' | 'Input' | 'Focus' | 'Blur' | 'Invalid'
type FormHandlerNames = `on${CapitalizedFormEventNames}`; // 'onSubmit' | 'onReset' | 'onChange' | 'onInput' | 'onFocus' | 'onBlur' | 'onInvalid'
type FormHandlers = {
  [FormHandlerName in FormHandlerNames]: (event: Event) => void;
};
```

#### Example #3

```ts
interface UserStoreState {
  id: number;
  name: string;
  age: number;
}

// Type to convert a property name to a setter function name.
// For example, given 'name', it converts it to 'setName'.
type ConvertToSetter<S extends string> = `set${Capitalize<S>}`;

// Create a type for store setters based on the state.
// For each property in StoreState, generate a setter function.
type StoreSetters<StoreState> = {
  [K in keyof StoreState as ConvertToSetter<Extract<K, string>>]: (value: StoreState[K]) => void;
};

// Combine the state and its setter into a single type.
type UserStore = UserStoreState & StoreSetters<UserStoreState>;

// Resulting type:
// type UserStore = {
//   id: number;
//   name: string;
//   age: number;
//   setId: (value: number) => void;
//   setName: (value: string) => void;
//   setAge: (value: number) => void;
// }
```
