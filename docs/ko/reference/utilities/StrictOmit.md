# StrictOmit\<ObjectType, ExcludedKeys>

## 개요

이 타입은 TypeScript의 `Omit`유틸리티 타입의 더 엄격한 버전이에요.

`Omit`은 주어진 타입에 존재하지 않는 키의 생략도 허용하는 것과 달리, `StrictOmit`은 실제로 타입에 존재하는 키만 생략할 수 있도록 보장해요. 이를 통해 더 제어된 예측 가능한 타입 조작이 가능해지며, 존재하지 않는 키의 의도치 않은 생략을 방지할 수 있어요.

## 문법

```ts
type StrictOmit<ObjectType, ExcludedKeys extends keyof ObjectType> = Omit<
  ObjectType,
  ExcludedKeys
>;
```

- **ObjectType**: 속성이 생략될 타입이에요.
- **ExcludedKeys**: 생략할 키들로, 반드시 `ObjectType`에 존재해야 해요.

## 예제

#### 예제 #1

```ts
type Example = {
  a: number;
  b: string;
  c: boolean;
};

type StrictOmittedExample = StrictOmit<Example, 'c'>;
// Result: { a: number; b: string }
```

:::tip
팀에서 ESLint를 사용하고 `Omit` 대신 `StrictOmit`을 사용하도록 강제하려면, ESLint 설정을 통해 이를 감지할 수 있어요. `@typescript-eslint/ban-types` 규칙을 설정하여 `Omit`이 사용될 때 오류 메시지를 표시하게 함으로써, 개발자들이 `StrictOmit`을 사용하도록 유도할 수 있어요. 아래는 ESLint 설정 방법이에요.

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
          Omit: 'Use StrictOmit instead',
        },
        extendsDefaults: true,
      },
    ],
  },
};
```

:::
