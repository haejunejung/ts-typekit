# Parameters\<Type>

:::info
`Parameters\<Type>`은 TypeScript 3.1 이상에서 사용할 수 있는 내장 유틸리티 타입이에요. 자세한 내용은 [타입스크립트 핸드북](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype)과 [릴리즈 노트](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#tuples-in-rest-parameters-and-spread-expressions)를 참고해주세요.
:::

## 개요

`Parameters\<Type>`은 TypeScript에 내장된 유틸리티 타입으로, 함수 타입 `Type`의 매개변수로부터 튜플 유형을 생성해요. 이를 통해 수동으로 재정의하지 않고도 코드의 다른 곳에서 함수 매개변수 타입을 추출하고 재사용할 수 있어요.

## 문법

```ts
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
```

- **Type (T)**: 매개변수 타입을 추출할 함수 타입을 나타내요.

## 예제

#### 예제 #1

```ts
type T0 = Parameters<(a: number) => void>; // [a: number]

type T2 = Parameters<(args: { a: number; b: string }) => void>; // [args: { a: number, b: string}]

type T1 = Parameters<() => void>; // []

type T3 = Parameters<any>; // unknown[]

type T4 = Parameters<never>; // never

type T5 = Parameters<string>; // never
// Type 'string' does not satisfy the constraint '(...args: any) => any'.

type T6 = Parameters<Function>; // never
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.
```

#### 예제 #2

```ts
function logAndInvoke<F extends (...args: any[]) => any>(func: F): (...args: Parameters<F>) => ReturnType<F> {
  return (...args: Parameters<F>): ReturnType<F> => {
    console.log(
      'Call function with arguments type',
      args.map(arg => typeof arg)
    );
    console.log('Call function with arguments values', args);
    return func(...args);
  };
}

const addFn = (a: number, b: number): number => {
  return a + b;
};

const logging = logAndInvoke(addFn);
// const logging: (a: number, b: number) => number

logging(1, 2);
// [LOG]: "Call function with arguments type",  ["number", "number"]
// [LOG]: "Call function with arguments values",  [1, 2]
```
