# Exclude\<UnionType, ExcludedMembers>

:::info
`Exclude\<UnionType, ExcludedMembers>`은 TypeScript 2.8 이상에서 사용할 수 있는 내장 유틸리티 타입이에요. 자세한 내용은 [타입스크립트 핸드북](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers)과 [릴리즈 노트](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types)를 참고해주세요.
:::

## 개요

`Exclude<UnionType, ExcludedMembers>`는 TypeScript에 내장된 유틸리티 타입으로, `UnionType`에서 `ExcludedMembers`에 할당 가능한 모든 유니온 멤버를 제외하여 타입을 구성해요.

## 문법

```ts
type Exclude<T, U> = T extends U ? never : T;
```

- **UnionType (T)**: 이 타입은 특정 멤버를 제외하려는 유니온 타입을 나타내요. 여러 가능한 값이나 타입을 포함할 수 있어요.
- **ExcludedMembers (U)**: 이 타입은 유니온 타입에서 제외하고자 하는 멤버 또는 타입을 나타내요. 유니온 타입에서 어떤 멤버를 제거할지를 지정하는 타입이에요.

## 예제

#### 예제 #1

```ts
type Fruit = Exclude<'apple' | 'banana' | 'orange' | 'pizza' | 'chicken', 'pizza' | 'chicken'>;
// type Fruit = "apple" | "banana" | "orange";
```

#### 예제 #2

```ts
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; x: number }
  | { kind: 'triangle'; x: number; y: number };

type NonCircleShape = Exclude<Shape, { kind: 'circle' }>;
// type NonCircleShape = { kind: 'square'; x: number } | { kind: 'triangle'; x: number; y: number };
```

#### 예제 #3

```ts
type Circle = {
  radius: number;
};

type Square = {
  side: number;
};

function notUsingExclude(type: Circle | Square) {
  // Circle 또는 Square 속성을 가진 모든 객체를 수용해요.
  // 유니온 타입은 속성의 조합을 허용하므로 여기서는 타입 오류가 발생하지 않아요.
}

notUsingExclude({ radius: 5, side: 5 }); // ✅

type PickOne<T> = {
  [K in keyof T]: Record<K, T[K]> & Partial<Record<Exclude<keyof T, K>, undefined>>;
}[keyof T];

function usingExclude(type: PickOne<Circle & Square>) {
  // Circle과 Square에서 정확히 하나의 속성을 가진 객체를 수용해요.
  // PickOne을 사용하면 하나의 속성만 정의할 수 있고 다른 속성은 `undefined` 혹은 생략되어야 해요.
}

usingExclude({ radius: 5 }); // ✅
usingExclude({ radius: 5, side: undefined }); // ✅
usingExclude({ side: 5 }); // ✅
usingExclude({ radius: undefined, side: 5 }); // ✅
usingExclude({ radius: 5, side: 5 }); // ❌
```
