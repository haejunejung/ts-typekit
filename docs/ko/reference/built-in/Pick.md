# Pick\<Type, Keys>

:::info
`Pick<Type, Keys>`은 TypeScript 2.1 이상에서 사용할 수 있는 내장 유틸리티 타입이에요. 자세한 내용은 [타입스크립트 핸드북](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)과 [릴리즈 노트](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#partial-readonly-record-and-pick)를 참고해주세요.
:::

## 개요

`Pick<Type, Keys>`는 `Type`에서 `Keys` 속성 집합을 선택하여 타입을 구성하는 TypeScript에 내장된 유틸리티 타입이에요.

## 문법

`Pick<Type, Keys>`은 `Type`과 `Keys` 두 개의 매개변수를 사용해요.
- **Type**: 특정 속성들을 선택할 현재 타입이에요.
- **Keys**: `Type`에서 선택하고자 하는 속성의 키를 나타내는 문자열 리터럴 타입 혹은 문자열 리터럴 타입의 유니온 타입이에요. `Key`는 파이프 기호를 사용하여 결합할 수 있어요.

```
Pick<Type, Keys>;
```

## 예제

#### 예제 #1

```ts
interface Task {
    title: string;
    description: string;
    completed: boolean;
}

type TaskPreview = Pick<Task, 'title' | 'completed'>;

const task: TaskPreview = {
    title: 'Clean room',
    completed: false
}
```

#### 예제 #2

```ts
function pick <T extends Record<string, any>, K extends keyof T> (obj: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;

    for (const key of keys) {
        result[key] = obj[key];
    }

    return result;
}
```

#### 예제 #3

```ts
interface Credential {
    name: string;
    email: string;
    password: string;
}

class AuthService {
    // 사용자 계정을 생성하기 위한 메서드예요.
    async create ({ name, email, password }: Credential): Promise<void> {
        // 실제 구현에서는, 
        // 사용자의 데이터를 데이터베이스에 저장하는 로직이 들어갈 수 있어요.
    }

    // 사용자 로그인을 위한 메서드예요.
    async login ({ email, password }: Pick<Credential, 'email' | 'password'>): Promise<void> {
        // 실제 구현에서는, 
        // 이메일과 비밀번호를 통해 사용자를 인증하는 로직이 들어갈 수 있어요.
    }

    // Method to log out a user
    async logout ({ email }: Pick<Credentail, 'email'>): Promise<void> {
        // 실제 구현에서는,
        // 사용자의 세션을 종료하는 로직이 들어갈 수 있어요.
        // this would include logic to end the user session.
    }
}
```