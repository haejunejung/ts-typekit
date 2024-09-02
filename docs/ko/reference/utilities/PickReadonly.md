# PickReadonly\<T, K>

## 개요

선택된 키를 읽기 속성으로 만들고 나머지 타입을 변경되지 않은 상태를 유지하는 새로운 타입을 생성해요.

## 문법

```ts
type PickReadonly<T, K extends keyof T> = Simplify<
  Omit<T, K> & Readonly<Pick<T, K>>
>;
```

- **T**: 키를 선택할 원본 타입이에요.
- **K**: 원본 타입 `T`에서 읽기 속성으로 변경할 키예요.

## 예제

```ts
type User = {
  id: number;
  image: string;
  name: string;
  age: string;
  job: string;
  hobby: string[];
};

type SomeReadonlyUser = PickReadonly<User, 'image' | 'name' | 'age' | 'job'>;
// 결과는 아래와 같아요.
// {
//   id: number;
//   readonly image: string;
//   readonly name: string;
//   readonly age: string;
//   readonly job: string;
//   hobby: string[];
// };
```
