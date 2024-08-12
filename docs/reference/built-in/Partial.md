# Partial\<Type>

:::info
The `Partial<Type>` utility type is available starting from TypeScript version 2.1. For more information see in [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype), [Release Note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#partial-readonly-record-and-pick).
:::

## Overview

`Partial<Type>` is a built in utility type in TypeSCript that constructs a type with all properties of `Type` set to optional. This utility will return a type that represents all subsets of a given type.

## Syntax

```ts
type Partial<T> = { [K in keyof T]?: T[K] | undefined };
```

- **Type (T)**: The type whose properties you want to make optional.

## Examples

#### Example #1

```ts
interface User {
    name: string;
    age: number;
};

type PartialUser = Partial<User>;
// This PartialUser interface is equivalent to the following:
// interface PartialUser {
//     name?: string;
//     age?: number;
// }
```


#### Example #2

```ts
interface Todo {
    title: string;
    description: string;
}

function updateTodo (todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});
```

#### Example #3

```ts
interface Book {
    title: string;
    description: string;
    price: number;
}

interface IBookApiService {
	create (book: Book): Promise<string>;
	update (bookId: string, updates: Partial<Book>): Promise<void>;
	getBookById (bookId: string): Promise<Book | null>;
};

class BookApiService implements IBookApiService {
	async create (book: Book): Promise<string> {
		// Implementation will create book.	
	}

	async update (bookId: string, updates: Partial<Book>): Promise<void> {
		// Implementation will update the book with the given ID.
	}

	async getBookById (bookId: string): Promise<Book | null> {
		// Implementation will return a book or null if not found.
	}
}
```