# StrictExclude\<BaseType, ExcludedMembers>

## 개요

이 타입은 TypeScript의 `Exclude` 유틸리티 타입의 더 엄격한 버전이에요.

`Exclude`는 주어진 타입에 없는 멤버도 제외할 수 있지만, `StrictExclude`는 오직 실제로 타입에 존재하는 멤버만 제외할 수 있도록 보장해요.

## 문법

```ts
type StrictExclude<BaseType, ExcludedMembers extends BaseType> = Exclude<
  BaseType,
  ExcludedMembers
>;
```

- **BaseType**: 유니온 멤버를 제외하고자 하는 기존 타입이에요.
- **ExcludedMembers**: `BaseType`에서 제외하려는 유니온 멤버 혹은 타입이에요.

## 예제

#### 예제 #1

```ts
type Example = 'admin' | 'editor' | 'viewer';
type StrictExcludedExample = StrictExclude<Example, 'admin'>;
// Result: "editor" | "viewer"
```

:::tip
If your team is using ESLint and wants to enforce the use of `StrictExclude` instead of the standard `Exclude`, you can configure ESLint to help catch this. The `@typescript-eslint/ban-types` rule can be configured to display an error message when `Exclude` is used, guiding developers to use `StrictExclude` instead. Here's how you can set up your ESLint configuration:

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
          Exclude: 'Use StrictExclude instead',
        },
        extendsDefaults: true,
      },
    ],
  },
};
```

:::
