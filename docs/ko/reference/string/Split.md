# Split\<String, Delimiter>

## 개요

`Split<String, Delimiter>`는 문자열을 지정한 구분자로 나누어 배열로 반환하는 유틸리티 타입이에요.

## 문법

```ts
type Split<
  S extends string,
  Delimiter extends string,
> = S extends `${infer Head}${Delimiter}${infer Tail}`
  ? [Head, ...Split<Tail, Delimiter>]
  : S extends Delimiter
    ? []
    : [S];
```

- **String (S)**: 분리될 문자열이에요.
- **Delimiter**: 문자열을 분리할 구분자예요.

## 예제

#### 예제 #1

```ts
type T1 = Split<'foo.bar.baz', '.'>; // ['foo', 'bar', 'baz']
type T2 = Split<'foo/bar/baz', '/'>; // ['foo', 'bar', 'baz']
type T3 = Split<'', '/'>; // ['']
```

#### 예제 #2

```ts
// API 경로에서 파라미터를 추출하는 타입이에요.
// 1. 주어진 API 경로를 '/' 구분자로 분리해요.
// 예를 들어, '/products/:productId/reviews/:reviewId'는 ['products', ':productId', 'reviews', ':reviewId']로 분리돼요.
// 2. 분리된 결과를 사용하여 객체 타입을 생성해요.
// 이 객체의 키는 경로 파라미터의 이름(예: 'productId', 'reviewId')이고, 값은 항상 문자열 타입이에요.
type ExtractParams<ApiPath extends string> =
  Split<ApiPath, '/'> extends (infer Part)[]
    ? { [K in Part extends `${string}:${infer Param}` ? Param : never]: string }
    : {};

// 예시 API path
type ApiPath = '/products/:productId/reviews/:reviewId';

// 예시 API path로부터 Params를 추출해요.
type ApiParams = ExtractParams<ApiPath>;

// 결과 값은 아래와 같아요.
// type ApiParams = {
//   productId: string;
//   reviewId: string;
// }
```
