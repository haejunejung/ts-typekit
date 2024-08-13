# Awaited\<Type>

:::info
`Awaited<Type>`은 TypeScript 4.5 이상에서 사용할 수 있는 내장 유틸리티 타입이에요. 자세한 내용은 [타입스크립트 핸드북](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)과 [릴리즈 노트](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#the-awaited-type-and-promise-improvements)를 참고해주세요.
:::

## 개요

`Awaited<Type>`은 `Promise`가 해결하는 값의 타입을 추출하는 TypeScript에 내장된 유틸리티 타입이에요. 이는 비동기 작업을 다룰 때, `Promise`가 해결된 후 최종 결과 타입을 결정해야 할 때 유용하게 사용할 수 있어요.

## 문법

이 타입은 하나의 타입 매개변수를 받으며, 이 매개변수는 해결된 타입을 추출하고자 하는 `Promise`를 나타내는 `Type`이에요.

```ts
type NewType = Awaited<Type>;
```

## 예제

#### 예제 #1

```ts
type A = Awaited<Promise<string>>;
// type A = string

type B = Awaited<Promise<Promise<number>>>;
// type B = number

type C = Awaited<boolean | Promise<number>>;
// type C = boolean | number
```

#### 예제 #2

```ts
async function getUser(): Promise<{ id: number; name: string; age: number }> {
  const response = await fetch('/api/user');
  const data = await response.json();
  return data;
}

type User = Awaited<ReturnType<typeof getUser>>;
// type User = { id: number, name: string, age: number}

type UserWithoutAwaited = ReturnType<typeof getUser>;
// type UserWithoutAwaited = Promise<{ id: number, name: string, age: number }>
```

#### 예제 #3

```ts
async function nestedPromise(): Promise<Promise<boolean>> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        new Promise<boolean>(resolve => {
          setTimeout(() => {
            resolve(true);
          }, 1000);
        })
      );
    }, 1000);
  });
}

type NestedPromise = Awaited<ReturnType<typeof nestedPromise>>;
// type NestedPromise = boolean

type NestedPromiseWithoutAwaited = ReturnType<typeof nestedPromise>;
// type NestedPromiseWithoutAwaited = Promise<Promise<boolean>>
```
