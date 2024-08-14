# Record\<Type, Union>

:::info
`Extract<Type, Union>`은 TypeScript 2.8 이상에서 사용할 수 있는 내장 유틸리티 타입이에요. 자세한 내용은 [타입스크립트 핸드북](https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union)과 [릴리즈 노트](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types)를 참고해주세요.
:::

## 개요

`Extract<Type, Union>`은 `Union`에 할당할 수 있는 모든 유니온 멤버를 `Type`에서 추출하여 타입을 구성하는 TypeScript 내장된 유틸리티 타입이에요.

## 문법

```ts
type Extract<T, U> = T extends U ? T : never;
```

- **Type (T)**: 유니온 멤버를 추출하고자 하는 타입을 나타내요.
- **Union (U)**: `Type`에서 추출하고자 하는 타입을 나타내요.

## 예제

#### 예제 #1

```ts
type User = 'admin' | 'editor' | 'viewer';

type PrivilegedUser = Extract<User, 'admin' | 'editor'>; // 'admin' | 'editor'
```

#### 예제 #2

```ts
type OnlyFunction = Extract<string | number | symbol | (() => void), Function>; // () => void
```

#### 예제 #3

```ts
type Primitive = string | number | boolean | bigint | symbol | null | undefined;

type NonPrimitive<T> = Extract<T, Primitive>;

type NonPrimitiveTypes = NonPrimitive<string | number | object>; // object
```

#### 예제 #4

```ts
declare function uniqueId(): number;

const ID = Symbol('ID');

interface Product {
    [ID]: number;
    name: string;
    price: number;
}

type ProductUpdatableKeys = Extract<keyof Product, string>;

function updateProduct <
    Obj extends Product,
    Key extends ProductUpdatableKeys,
    Value extends Obj[Key]
> (obj: Obj, key: Key, value: Value) {
    obj[key] = value;
}

const product: Product = {
    [ID]: uniqueId(),
    name: 'box',
    price: 5000
}

updateProduct(product, 'name', 'paper'); // ✅
updateProduct(product ID, uniqueId()); // ❌
```
