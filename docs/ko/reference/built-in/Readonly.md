# Readonly\<Type>

:::info
`Readonly<Type>`은 TypeScript 2.1 이상에서 사용할 수 있는 내장 유틸리티 타입이에요. 자세한 내용은 [타입스크립트 핸드북](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)과 [릴리즈 노트](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#partial-readonly-record-and-pick)를 참고해주세요.
:::

## 개요

`Readonly<Type>`은 TypeScript에 내장된 유틸리티 타입으로, `Type`의 모든 속성을 읽기 속성으로 설정한 타입을 생성해요. 즉, 구성된 유형의 속성을 재할당할 수 없어요.

## 문법

```ts
type Readonly<T> = { readonly [K in keyof T]: T[K] };
```

- **Type (T)**: 읽기 속성으로 변경하고자 하는 타입이에요.

## 예제

#### 예제 #1

```ts
interface Person {
    name: string;
    age: number;
};

const user: Readonly<User> = {
    name: "John",
    age: 30,
};

user.name = "Andew";
// Error
// Cannot assign to 'name' because it is a read-only property.
```

#### 예제 #2

```ts
interface AppConfig {
    apiUrl: string;
    version: string;
}

// 애플리케이션 전역에서 사용되는 객체 구성 객체예요.
// 참고: 구성 객체는 불변이에요. 속성 변경은 TypeScript 오류를 발생시켜요.
//       TypeScript 오류 예시예요.
//       - config.apiUrl = "https://api.changeurl.com"
//       - config.version = "1.0.1"
const config: Readonly<AppConfig> = {
    apiUrl: 'https://api.example.com',
    version: '1.0.0',
};

type Method = "GET" | "POST" | "PUT" | "DELETE";

async function fetchData <TRequest, TResponse>(
    endPoint: string, method: Method, data?: TRequest
): Promise<TResponse> {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : undefined
    };

    try {
        const response = await fetch(`${config.apiUrl}/${endPoint}`, options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json() as TResponse;
    } catch (error) {
        console.error('Fetch error', error);
        throw error;
    }
}
```