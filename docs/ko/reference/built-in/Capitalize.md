# Capitalize\<StringType>

:::info
`Capitalize\<StringType>`은 TypeScript 2.8 이상에서 사용할 수 있는 내장 유틸리티 타입이에요. 자세한 내용은 [타입스크립트 핸드북](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype)과 [릴리즈 노트](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/)를 참고해주세요.
:::

## 개요

`Capitalize<StringType>` 유틸리티 타입은 문자열 리터럴 타입의 첫 글자를 대문자로 표시하고 나머지 문자는 변경하지 않아요.

## 구문

```ts
type Capitalize<S extends string> = S extends `${infer F}${infer Rest}` ? `${UpperCase<F>}${Rest}` : S;
```

- **StringType (S)**: 첫 글자를 대문자로 바꿀 문자열이에요.

## 예제

#### 예제 #1

```ts
type LowercaseGreeting = 'hello, world';
type Greeting = Capitalize<LowercaseGreeting>; // 'Hello, world'
```

#### 예제 #2

```ts
type FormEventNames = 'submit' | 'reset' | 'change' | 'input' | 'focus' | 'blur' | 'invalid';
type CapitalizedFormEventNames = Capitalize<FormEventNames>; // 'Submit' | 'Reset' | 'Change' | 'Input' | 'Focus' | 'Blur' | 'Invalid'
type FormHandlerNames = `on${CapitalizedFormEventNames}`; // 'onSubmit' | 'onReset' | 'onChange' | 'onInput' | 'onFocus' | 'onBlur' | 'onInvalid'
type FormHandlers = {
  [FormHandlerName in FormHandlerNames]: (event: Event) => void;
};
```

#### 예제 #3

```ts
interface UserStoreState {
  id: number;
  name: string;
  age: number;
}

// 프로퍼티명을 setter 함수명으로 변환하는 타입이에요.
// 예를 들어, 'name'이 주어졌을 때, `setName`으로 변환해요.
type ConvertToSetter<S extends string> = `set${Capitalize<S>}`;

// 상태를 기반로 setter 함수 타입을 생성해요.
// StoreState의 각 프로퍼티에 대해 setter 함수 타입을 생성해요.
type StoreSetters<StoreState> = {
  [K in keyof StoreState as ConvertToSetter<string & K>]: (value: StoreState[K]) => void;
};

// 상태와 setter를 하나의 타입으로 결합해요.
type UserStore = UserStoreState & StoreSetters<UserStoreState>;

// 결과 타입:
// type UserStore = {
//   id: number;
//   name: string;
//   age: number;
//   setId: (value: number) => void;
//   setName: (value: string) => void;
//   setAge: (value: number) => void;
// }
```
