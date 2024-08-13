# Partial\<Type>

:::info
`Partial<Type>`은 TypeScript 2.1 이상에서 사용할 수 있는 내장 유틸리티 타입이에요. 자세한 내용은 [타입스크립트 핸드북](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)과 [릴리즈 노트](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#partial-readonly-record-and-pick)를 참고해주세요.
:::

## 개요

`Partial<Type>`은 TypeScript에 내장된 유틸리티 타입으로, `Type`의 모든 속성을 선택적으로 설정한 타입을 생성해요. 이 유틸리티는 주어진 타입의 모든 부분 집합을 표현하는 타입을 반환해요.

## 문법

```ts
type Partial<T> = { [K in keyof T]?: T[K] | undefined };
```

- **Type (T)**: 선택적으로 만들고자 하는 속성을 가진 타입이에요.

## 예제

#### 예제 #1

```ts
interface User {
  name: string;
  age: number;
}

type PartialUser = Partial<User>;
// PartialUser 인터페이스는 아래와 같아요.
// interface PartialUser {
//     name?: string;
//     age?: number;
// }
```

#### 예제 #2

```ts
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
});
```

#### 예제 #3

```ts
interface Book {
  title: string;
  description: string;
  price: number;
}

interface IBookApiService {
  create(book: Book): Promise<string>;
  update(bookId: string, updates: Partial<Book>): Promise<void>;
  getBookById(bookId: string): Promise<Book | null>;
}

class BookApiService implements IBookApiService {
  async create(book: Book): Promise<string> {
    // 이 부분의 구현은 책을 생성해요.
  }

  async update(bookId: string, updates: Partial<Book>): Promise<void> {
    // 이 부분의 구현은 주어진 ID를 가진 책을 갱신해요.
  }

  async getBookById(bookId: string): Promise<Book | null> {
    // 이 부분의 구현은 책을 반환하거나 책을 찾을 수 없으면 null을 반환해요.
  }
}
```
