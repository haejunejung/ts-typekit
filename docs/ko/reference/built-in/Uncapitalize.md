# Uncapitalize\<StringType>

:::info
`Uncapitalize\<StringType>`은 TypeScript 4.1 이상에서 사용할 수 있는 내장 유틸리티 타입이에요. 자세한 내용은 [타입스크립트 핸드북](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uncapitalizestringtype)과 [릴리즈 노트](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/)를 참고해주세요.
:::

## 개요

`Uncapitalize<StringType>` 유틸리티 타입은 문자열 리터럴 타입의 첫 글자를 소문자로 변환하고 나머지 문자는 변경되지 않은 상태로 유지하는데 사용돼요. 이는 명명 규칙이나 기타 요구 사항에 맞게 문자열 리터럴 타입을 변환하는데 유용하게 사용할 수 있어요.

## 구문

```ts
type Uncapitalize<S extends string> = S extends `${infer F}${infer Rest}` ? `${Lowercase<F>}${Rest}` : S;
```

- **StringType (S)**: 첫 글자를 소문자로 바꿀 문자열이에요.

## 예제

#### 예제 #1

```ts
type UppercaseGreeting = 'HELLO WORLD';
type UncomfortableGretting = Uncapitalize<UppercaseGreeting>; // 'hELLO WORLD'

type PascalCase = 'PascalCase';
type CamelCase = Uncapitalize<PascalCase>; // 'pascalCase'
```

#### 예제 #2

```ts
type ConfigOptions = 'MaxConnections' | 'TimeoutDuration' | 'RetryAttempts';

type ConfigKeys = Uncapitalize<ConfigOptions>;

const config: Record<ConfigKeys, number> = {
  maxConnections: 100,
  timeoutDuration: 5000,
  retryAttempts: 3,
};
```
