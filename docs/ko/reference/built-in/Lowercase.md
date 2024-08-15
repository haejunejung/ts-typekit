# Lowercase\<StringType>

:::info
`Capitalize\<StringType>`은 TypeScript 4.1 이상에서 사용할 수 있는 내장 유틸리티 타입이에요. 자세한 내용은 [타입스크립트 핸드북](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#lowercasestringtype)과 [릴리즈 노트](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/)를 참고해주세요.
:::

## 개요

`Lowercase<StringType>` 유틸리티 타입은 문자열의 각 문자를 소문자로 변환해요.

## 문법

```ts
type Lowercase<S extends string> = intrinsic;
```

- **StringType (S)**: The string that you want to convert each character in the string to the lowercase version.

## Examples

#### Example #1

```ts
type Greeting = 'Hello, world';
type QuietGreeting = Lowercase<Greeting>; // 'hello, world'

type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`;
type MainID = ASCIICacheKey<'MY_APP'>; // 'id-my_app'
```

#### Example #2

```ts
type Environment = 'DATABASE_URL' | 'NODE_ENV' | 'PORT';
type LowercaseEnvironment = Lowercase<Environment>;

const env: Record<LowercaseEnvironment, string> = {
  database_url: 'mongodb://localhost:27017/db',
  node_env: 'development',
  port: '8000',
};
```
