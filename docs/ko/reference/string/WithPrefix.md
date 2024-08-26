# WithPrefix\<BaseString, Prefix>;

## 개요

`WithPrefix` 타입은 기존 문자열 타입 앞에 지정된 접두사를 추가하여 새로운 문자열 타입을 생성해요. 이를 통해 문자열 타입에 일관된 접두사를 자동으로 추가할 수 있어요.

## 문법

```ts
type WithPrefix<
  BaseString extends string,
  Prefix extends string,
> = `${Prefix}${BaseString}`;
```

- **BaseString**: 접두사를 추가할 기존 문자열 타입이에요.
- **Prefix**: 추가될 접두사예요.

## 예제

#### 예제 #1

```ts
type FormEventNames = 'submit' | 'reset' | 'change';
type CapitalizedFormEventNames = Capitalize<FormEventNames>;
type FormEventHandlers = WithPrefix<CapitalizedFormEventNames, 'on'>;
// Result: "onSubmit" | "onReset" | "onChange";
```
