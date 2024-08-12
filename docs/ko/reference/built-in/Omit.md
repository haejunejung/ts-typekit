# Omit\<Type, Keys>

:::info
`Omit<Type, Keys>`은 TypeScript 2.1 이상에서 사용할 수 있는 내장 유틸리티 타입이에요. 자세한 내용은 [타입스크립트 핸드북](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)과 [릴리즈 노트](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-5.html#the-omit-helper-type)를 참고해주세요.
:::

## 개요

`Omit<Type, Keys>`는 `Type`에서 모든 속성을 선택한 다음 `Keys` (문자열 리터럴 또는 문자열 리터럴의 합집합)을 제거하여 타입을 구성해요. 이는 `Pick`의 반대 개념이에요.

## 문법

```ts
type Omit <T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] };
```

- **Type (T)**: 원본 타입으로, 여기서 일부 속성을 제거하고자 하는 타입이에요. 이 타입에는 수정할 속성들이 포함되어 있어요.
- **Keys (K)**: 제거하고자 하는 속성 이름의 유니온 타입이에요. 이 타입에는 원본 타입에서 제거할 속성 이름들이 포함돼요.

## 예제

#### 예제 #1

```ts
interface Thumbnail {
    image: string;
    title: string;
    description: string;
    author: string;
    tags: string[];
    details: string[];
}

type ThumbnailPreview = Omit<Thumbnail, 'details'>;
// 아래와 같은 의미를 가져요.
// type ThumbnailPreview = {
//     image: string;
//     title: string;
//     description: string;
//     author: string;
//     tags: string[];
// }
```

#### 예제 #2

```ts
function omit<T extends Record<PropertyKey, any>, K extends keyof T> (
    obj: T,
    keys: K[]
): Omit<T, K> {
    const reslt = {...obj};

    for (const key of keys) {
        delete result[key];
    }

    return result as Omit<T, K>;
}
```

#### 예제 #3

```ts
interface ApiResponse<T>{
    status: number;
    data: T;
    error?: string;
}

type Payload<T> = Omit<ApiResponse<T>, 'status' | 'error'>;

interface User {
    id: string;
    name: string;
    email: string;
}

async function fetchUser (userId: string): Promise<Payload<User>> {
    try {
        const response = await fetch(`/api/users/${userId}`);
        const apiResponse: ApiResponse<User> = await response.json();

        if (apiResponse.status === 200) {
            return {
                data: apiResponse.data
            };
        } else {
            throw new Error('Failed to fetch user data');
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}
```