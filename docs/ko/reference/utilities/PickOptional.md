# PickOptional\<T, K>

## 개요

지정된 키를 선택 사항으로 만들고 나머지 타입은 변경되지 않은 상태를 유지하는 새로운 타입을 생성해요.

## 문법

```ts
type PickOptional<T, K extends keyof T> = Simplify<
  Omit<T, K> & Partial<Pick<T, K>>
>;
```

## 예제

#### 예제 #1

```ts
type User = {
  id: number;
  name: string;
  age: number;
};

type UserIdOptional = PickOptional<User, 'id'>;
// {
//     id?: number;
//     name: string;
//     age: number;
// }
```