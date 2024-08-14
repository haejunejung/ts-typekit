# ReturnType\<Type>

:::info
`ReturnType<Type>`은 TypeScript 3.1 이상에서 사용할 수 있는 내장 유틸리티 타입이에요. 자세한 내용은 [타입스크립트 핸드북](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype)과 [릴리즈 노트](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#tuples-in-rest-parameters-and-spread-expressions)를 참고해주세요.
:::

## 개요

`ReturnType<Type>`은 TypeScript의 내장 유틸리티 타입으로 `Type`으로부터 반환 타입을 추출해요. 이를 통해 새롭게 정의할 필요없이 함수의 반환 타입을 얻어 재사용할 수 있어요. 이는 코드의 일관성을 보장하고 중복을 줄일 수 있어요.

## 문법

```ts
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R => R : never;
```

- **Type (T)**: 반환 타입을 추출할 함수의 타입을 나타내요.

## 예제

#### 예제 #1

```ts
type T0 = ReturnType<() => string>; // string
type T1 = ReturnType<(a: number) => string>; // string
type T2 = ReturnType<<T>() => T>; // unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
type T4 = ReturnType<() => { a: number; b: number }>; // {a: number, b: number}
type T5 = ReturnType<any>; // any
type T6 = ReturnType<never>; // never
type T7 = ReturnType<string>; // ❌
// Type 'string' does not satisfy the constraint '(...args: any) => any'.

type T8 = ReturnType<unknown>; // ❌
// Type 'unknown' does not satisfy the constraint '(...args: any) => any'.

type T9 = ReturnType<Function>; // ❌
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// Type 'Function' provides no match for the signature '(...args: any): any'.
```

#### 예제 #2

```ts
function mapIterable<Item, Mapper extends (item: Item) => any, Result extends ReturnType<Mapper>>(
  items: Iterable<Item>,
  callback: Mapper
): Result[] {
  const results: Result[] = [];

  for (const item of items) {
    results.push(callback(item));
  }

  return results;
}

const array: number[] = [1, 2, 3];
const squaredArray = mapIterable(array, (item: number) => item * item);
// 콜백 함수는 각 숫자를 제곱하므로 `squaredArray`는 number[] 타입이에요.

const setObj: Set<string> = new Set(['foo', 'bar', 'baz']);
const lengths = mapIterable(setObj, (item: string) => item.length);
// 콜백 함수는 각 문자열의 길이를 반환하므로 `lengths`는 number[] 타입이에요.

const mapObj: Map<string, number> = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);
const KeyValueStrings = mapIterable(mapObj, ([key, value]: [string, number]) => {
  return `${key}: ${value}`;
});
// 콜백 함수는 key와 value을 조합한 문자열을 반환하므로 `keyValueStrings`는 string[] 타입이에요.
```
