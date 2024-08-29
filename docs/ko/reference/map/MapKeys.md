# MapKeys\<T>

## 개요

주어진 Map 타입 `T`로 부터 키 타입을 추출해요.

## 문법

```ts
type MapKeys<T extends Map<unknown, unknown>> =
  T extends Map<infer K, unknown> ? K : never;
```

- **T**: 키 타입을 추출할 Map 타입이에요.

## 예제

```ts
const phoneBook: Map<'tomas' | 'sha', string> = new Map([
 ['tomas': '010-0000-0000'],
 ['sha': '010-1111-1111'],
])

type PhoneBookKeys = MapKeys<typeof phoneBook>; // 'tomas' | 'sha'

const hashMap: Map<string, string> = new Map([
 ['0': 'coffee'],
 ['1': 'dessert']
])

type HashMapKeys = MapKeys<typeof hashMap>; // string
```
