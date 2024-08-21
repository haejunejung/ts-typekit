# ExtractRouteParams\<Route, ParamType>

## 개요

이 타입은 다양한 제약 조건과 수정자를 고려하여 경로 패턴에서 파라미터 정의를 추출하도록 설계되었어요. 특정 패턴을 따르는 경로 문자열을 처리하고, 다양한 파라미터 수정자를 수용하여 TypeScript에서 파라미터를 정확하게 정의해요.

- **? (선택적 파라미터)**: 파라미터가 선택적이며, 존재할 수도 있고 존재하지 않을 수도 있음을 나타내요.
- **\* (0 또는 다수의 반복 파라미터)**: 파라미터가 0회 이상 반복될 수 있음을 나타내요.
- **+ (하나 이상의 반복 파라미터)**: 파라미터가 1회 이상 반복되어야 함을 나타내요.
- **'' (기본 필수 파라미터)**: 파라미터가 필수이며 정확히 한 번 나타나야 함을 나타내요.

## 문법

이 타입의 문법은 다소 길고 복잡해요. 문법에 대해서 더 알고 싶다면 [구현](https://github.com/haejunejung/ts-typekit/blob/main/source/url-parser/ExtractRouteParams.d.ts)을 확인해주세요.

```ts
export type ExtractRouteParams<
  Route extends string,
  ParamType = string | number | boolean,
>;
```

- **Route**: 경로 패턴 문자열이에요.
- **ParamType**: 파라미터 값의 타입을 나타내요.

## 예제

#### 예제 #1

```ts
type T0 = ExtractRouteParams<'/users/:userId/posts/:postId'>;
// Result: { userId: string } & { postId: string }

type T1 = ExtractRouteParams<'/users/:userId/posts/:postId', number>;
// Result: { userId: number } & { postId: number }

type T2 = ExtractRouteParams<'/users/:userId(\\d+)', number>;
// Result: { userId: number }

type T3 = ExtractRouteParams<'/search/:query+'>;
// Result: { query: string }

type T4 = ExtractRouteParams<'/items/:itemId/:category?'>;
// Result: { itemId: string } & { category?: string }
```

#### 예제 #2

```ts
function buildLink<Route extends string>(
  template: Route,
  params: ExtractRouteParams<Route, number>
): string {
  return template.replace(/:([a-zA-Z0-9_]+)/g, (_, key) => {
    const value = params[key as keyof typeof params];

    if (value !== undefined && value !== null) {
      return value.toString();
    }

    throw new Error(`Missing parameter: ${key}`);
  });
}

const url = buildLink('/users/:userId/products/:productId', {
  userId: 1,
  productId: 2,
});
// Result: '/users/1/products/2'
```
