# Uppercase\<StringType>

:::info
`Uncapitalize\<StringType>`은 TypeScript 4.1 이상에서 사용할 수 있는 내장 유틸리티 타입이에요. 자세한 내용은 [타입스크립트 핸드북](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype)과 [릴리즈 노트](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/)를 참고해주세요.
:::

## 개요

`Uppercase<StringType>` 유틸리티 타입은 문자열의 각 문자를 대문자로 변환해요.

## 문법

```ts
type Uppecase<S extends string> = intrinsic;
```

- **StringType (S)**: 대문자로 변환할 문자열이에요.

## Examples

#### Example #1

```ts
type Greeting = 'Hello, world';
type ShoutyGreeting = Uppercase<Greeting>; // "HELLO, WORLD"

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
type MainID = ASCIICacheKey<'my_app'>; // "ID-MY_APP"
```

#### Example #2

```ts
type HttpMethod = 'get' | 'post' | 'patch' | 'delete';

type ErrorMessageTypes = {
  [Method in HttpMethod as Uppercase<Extract<Method, string>>]?: { [Pattern: string]: string };
};

const errorMessages: ErrorMessageTypes = {
  GET: {
    '/posts': 'Failed to retrieve posts.',
    '/posts/:id': 'Failed to retrieve the specific post.',
  },
  // POST, PATCH, DELETE
};
```
