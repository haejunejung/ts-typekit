# Required\<Type>

:::info
`Required<Type>`은 TypeScript 2.8 이상에서 사용할 수 있는 내장 유틸리티 타입이에요. 자세한 내용은 [타입스크립트 핸드북](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype)과 [릴리즈 노트](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#improved-control-over-mapped-type-modifiers)를 참고해주세요.
:::

## 개요

`Required<Type>`은 TypeScript에 내장된 유틸리티 타입으로, `Type`의 모든 속성을 필수로 설정한 타입을 생성해요. 이는 `Partial<Type>`의 반대 개념이에요.

## 문법

```ts
type Required<T> = { [K in keyof T]-?: T[K] };
```

- **Type (T)**: 필수적으로 만들고자 하는 속성을 가진 타입을 나타내요.

## 예제

#### 예제 #1

```ts
interface Props {
  a?: number;
  b?: string;
}

const obj1: Props = { a: 5 };
const obj2: Required<Props> = { a: 5 };

// Error
// Property 'b' is missing in type '{ a: number; }'
// but required in type 'Required<Props>'

// Required<Props>는 아래와 같아요.
// interface Props {
//     a: number;
//     b: string;
// }
```

#### 예제 #2

```ts
interface SignUpForm {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

type RequiredSignUpForm = Required<SignUpForm>;

function validateSignUpForm(signUpData: RequiredSignUpForm): boolean {
  const requiredFields = ['username', 'email', 'password', 'confirmPassword'];

  for (const field of requiredFields) {
    if (signUpData[field as keyof RequiredSignUpForm] == null) {
      console.error(`필드 ${field}가 누락되었습니다.`);
      return false;
    }
  }

  if (signUpData.password !== signUpData.confirmPassword) {
    console.error(`패스워드가 일치하지 않습니다.`);
    return false;
  }

  return true;
}
```
