# StrictExtract\<BaseType, Subset>

## 개요

이 타입은 TypeScript의 `Extract` 유틸리티 타입의 더 엄격한 버전이에요.

`Extract`는 주어진 타입에 없는 멤버도 추출할 수 있지만, `StrictExtract`는 오직 실제로 타입에 존재하는 멤버만 추출할 수 있도록 보장해요.

## Syntax

```ts
export type StrictExtract<BaseType, Subset extends BaseType> = Extract<
  BaseType,
  Subset
>;
```

- **BaseType**: 유니온 멤버를 추출하려는 기존 타입이에요.
- **Subset**: `BaseType`에서 추출하려는 유니온 멤버 혹은 타입이에요.

## Examples

#### Example #1

```ts
type Example = 'admin' | 'editor' | 'viewer';
type StrictExtractedExample = StrictExtract<Example, 'admin' | 'editor'>;
// Result: "admin" | "editor"
```

:::tip
팀에서 ESLint를 사용하고 `Extract` 대신 `StrictExtract`을 사용하도록 강제하려면, ESLint 설정을 통해 이를 감지할 수 있어요. `@typescript-eslint/ban-types` 규칙을 설정하여 `Extract`이 사용될 때 오류 메시지를 표시하게 함으로써, 개발자들이 `StrictExtract`을 사용하도록 유도할 수 있어요. 아래는 ESLint 설정 방법이에요.

```js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // Include other relevant rules here
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Extract: 'Use StrictExtract instead',
        },
        extendsDefaults: true,
      },
    ],
  },
};
```

:::
