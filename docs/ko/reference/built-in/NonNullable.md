# NonNullable\<Type>

:::info
`NonNullable\<Type>`은 TypeScript 2.8 이상에서 사용할 수 있는 내장 유틸리티 타입이에요. 자세한 내용은 [타입스크립트 핸드북](https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype)과 [릴리즈 노트](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types)를 참고해주세요.
:::

## 개요

`NonNullable<Type>`은 `Type`에서 `null` 및 `undefined`을 제외하여 유형을 구성하는 TypeScript에 내장된 유틸리티 타입이에요. 이 기능은 변수에 항상 값이 있는지 확인하여 null 허용 타입과 관련된 불확실성을 제거해야 하는 상황에서 특히 유용해요.

## 문법

```ts
type NonNullable<T> = T extends null | undefiend ? never : T;
```

- **Type (T)**: `null` 및 `undefined`을 제외하려는 타입을 나타내요.

## 예제

#### 예제 #1

```ts
type T0 = NonNullable<string | number | undefined>; // string | number
type T1 = NonNullable<string | string[] | null | undefined>; // string | string[]
type T2 = NonNullable<string | string[] | null>; // string | string[]
```

#### 예제 #2

```ts
function isNotNullish<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}
```

#### 예제 #3

```ts
type FulfilledForm<T> = { [K in keyof T]: NonNullable<T[K]> };

function isFullyFilled<T extends object>(form: T): form is FulfilledForm<T> {
  return Object.values(form).every(value => value !== null && value !== undefined);
}

interface RecruitForm {
  name: string | null;
  age: number | null;
  role: 'admin' | 'editor' | 'viewer' | null;
  hobby: string[] | null;
  university: string | null;
}

class EmployeeApiService {
  private static readonly API_URL = '/api/employee';

  async create(form: FulfilledForm<RecruitForm>): Promise<void> {
    // Employee를 생성하는 구현이 들어갈 수 있어요.
  }

  async recruit(form: RecruitForm): Promise<void> {
    // isFullyFilled 함수는 폼의 모든 필드가 null 또는 undefined가 아닐 때만 true를 반환해요.
    // 따라서 이 함수가 호출된 이후 TypeScript는 form의 타입을 FulfilledForm<RecruitForm>으로 추론해요.
    if (isFullyFilled(form)) {
      // TypeScript는 여기에서 form의 타입을 FulfilledForm<RecruitForm>으로 추론해요.
      // 이는 form의 모든 필드가 null이나 undefined가 아닌 값을 가짐을 보장해요.
      try {
        await this.create(form);
      } catch (error) {
        // 오류 처리가 필요해요.
      }
    } else {
      // 이 블록에서는 TypeScript가 여전히 form의 타입을 RecruitForm으로 추론해요.
      // 이는 form의 필드 중 일부가 여전히 null 또는 undefined일 수 있음을 의미해요.
      // 이 블록에서는 폼이 불완전한 경우를 처리해야 해요.
    }
  }
}
```
