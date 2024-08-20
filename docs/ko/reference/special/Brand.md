# Brand\<BaseType, BrandTag>

## Overview

`Brand<BaseType, BrandTag>`는 TypeScript에서 명목적 타입 시스템을 구현하는데 사용되는 유틸리티 타입이에요.

TypeScript는 기본적으로 구조적 타입 시스템을 사용하고 있어요. 그래서 타입이 개념적으로 다르더라도 구조가 동일하면 호환 가능한 것으로 간주돼요.

즉, 동일한 구조를 가진 두 가지 타입은 기본적으로 상호 교환이 가능하므로 타입 안정성 문제를 발생시킬 수 있어요.

`Brand` 타입을 사용하면 기본 타입에 고유한 태그나 밴드를 추가하여 동일한 기본 구조로 고유한 타입을 생성할 수 있어요. 이를 통해, 기본 데이터 타입이 동일하더라도 더 강력한 타입 구분을 적용할 수 있어요.

## Syntax

```ts
type Brand<BaseType, BrandTag> = BaseType & {
  readonly __brand: BrandTag;
};
```

- **BaseType**: `string` 또는 `number`같이 브랜드화를 진행할 기본 타입이에요.
- **BrandTag**: 다양한 브랜드 타입을 구분하기 위해 사용되는 고유한 태그 혹은 식별자예요.

## Examples

#### Example #1

```ts
// Defining distinct types with the same underlying type.
type USD = Brand<number, 'USD'>;
type EUR = Brand<number, 'EUR'>;

// Usage
const usd = 100 as USD;
const eur = 100 as EUR;

// Error: Type 'USD' is not assignable to the type 'EUR'
const invalidAssignment: EUR = usd;
```

#### Example #2

```ts
declare function getPost(postId: Post['id']): Promise<Post>;
declare function getUser(userId: User['id']): Promise<User>;

interface User {
  id: Brand<number, 'User'>;
}

interface Post {
  id: Brand<number, 'Post'>;
  authorId: User['id'];
}

async function authorOfPost(postId: Post['id']): Promise<User> {
  // Argument of type 'Brand<number, "Post">' is not assignable to parameter of type 'Brand<number, "User">'.
  // Type 'Brand<number, "Post">' is not assignable to type '{ readonly __brand: "User"; }'.
  //   Types of property '__brand' are incompatible.
  //     Type '"Post"' is not assignable to type '"User"'.
  // return await getPost(postId).then((post) => getUser(post.id));

  return await getPost(postId).then(post => getUser(post.authorId));
}
```
