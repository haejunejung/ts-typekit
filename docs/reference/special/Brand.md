# Brand\<BaseType, BrandTag>

## Overview

The `Brand<BaseType, BrandTag>` is a utility type used to implement a nominal type system in TypeScript.

TypeScript primarily uses a structural type system, where types are considered compatible if they have the same structure, even if they are conceptually different.

This means that two types with the same structure are interchangeable by default, which can lead to type safey issues.

By using the `Brand` type, you can create distinct types with the same underlying structure by adding a unique tag or band to the base type.

This allows you to enforce stronger type distinctions, even if the underlying data types are the same.

## Syntax

```ts
type Brand<BaseType, BrandTag> = BaseType & {
  readonly __brand: BrandTag;
};
```

- **BaseType**: The base type to be branded, such as `string` or `number`.
- **BrandTag**: A unique tag or identifier used to distinguish different branded types.

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
