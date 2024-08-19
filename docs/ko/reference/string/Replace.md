# Replace\<String, Pattern, Replacement>

## 개요

`Replace<String, Pattern, Replacement>`는 문자열에서 처음으로 발견되는 지정된 패턴의 문자열을 대체 문자열로 바꾸는 유틸리티 타입이에요.

## 문법

```ts
export type Replace<
  S extends string,
  Pattern extends string,
  Replacement extends string,
> = S extends `${infer Head}${Pattern}${infer Tail}`
  ? `${Head}${Replacement}${Tail}`
  : S;
```

- **String (S)** : 치환이 이루어질 문자열이에요.
- **Pattern** : 치환될 부분 문자열 패턴이에요.
- **Replacement** : 패턴을 대체할 부분 문자열이에요.

## 예제

#### 예제 #1

```ts
type T0 = Replace<'hello world', 'world', 'typescript'>; // 'hello typescript'
type T1 = Replace<'bar bar baz', 'bar', 'foo'>; // 'foo bar baz'
type T2 = Replace<'', 'pattern', 'replacement'>; // ''
```

#### 예제 #2

```ts
type FieldTemplate = '{fieldName}_field';
type FieldPlaceholder = '{fieldName}';

type FieldName = 'username' | 'password';
type FieldNames = Replace<FieldTemplate, FieldPlaceholder, FieldName>;
// FieldNames = 'username_field' | 'password_field';
```
