# PickRequired\<T, K>

## 개요

선택된 키를 필수 사항으로 만들고 나머지 타입은 변경되지 않은 상태를 유지하는 새로운 타입을 생성해요.

## 문법

```ts
type PickRequired<T, K extends keyof T> = Simplify<
  Omit<T, K> & Required<Pick<T, K>>
>;
```

- **T** - 키를 선택할 원본 타입이에요.
- **K** - 원본 타입 `T`에서 필수 사항으로 만들 키예요.

## 예제

#### 예제 #1

```ts
type Post = {
  id: number;
  authorId: number;
  role: 'seller' | 'buyer';
  price?: number;
};

type PriceRequiredPost = PickRequired<Post, 'price'>;
// {
//   id: number;
//   authorId: number;
//   role: 'seller' | 'buyer';
//   price: number;
// }
```
