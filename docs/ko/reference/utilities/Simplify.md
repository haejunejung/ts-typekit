# Simplify\<T>

## 개요

`Simplify` 유틸리티 타입은 TypeScript의 유니온 타입을 단순화하여 속성을 단일 구조로 해결하는데 사용돼요.

이 타입은 타입 `T`를 받아들이고, `T`의 모든 속성을 유지하면서 유니온 구조를 간단한 평범한 객체 타입으로 변환한 새로운 타입을 반환해요.

이는 교차 타입(intersection type)을 다룰 때 특히 유용한데, 교차 타입은 종종 장황하거나 읽기 어려운 타입 정의를 가질 수 있기 때문이에요.

## 문법

```ts
type Simplify<T> = { [Key in keyof T]: T[Key] } & {};
```

- **T**: 단순화할 타입이에요.

## 예제

#### 예제 #1

```ts
type Crendentials = {
  email: string;
  password: string;
};

type UserInfo = {
  username: string;
  age: number;
  gender: 'M' | 'F';
};

type CreateUserRequest = Simplify<Credentials & UserInfo>;
// `Simplify`를 사용하지 않았을 때, IDE `Credentials & UserInfo`으로 보여줘요.
// 하지만, 단순화된 결과는 아래와 같아요.
// {
//   email: string;
//   password: string;
//   username: string;
//   age: number;
//   gender: 'M' | 'F';
// }
```
