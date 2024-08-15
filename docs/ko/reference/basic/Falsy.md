# Falsy

## 개요

JavaScript에서 거짓으로 간주되는 모든 값을 나타내는 타입이에요.

JavaScript에서는 Boolean에서 `false`로 평가되는 값을 `Falsy`라고 해요. 이 타입에는 다음이 포함돼요.

- **false**: Boolean 값인 false.
- **""**: 빈 문자열.
- **0**: 숫자 0.
- **null**: 값이 없음을 나타내는 null 값.
- **undefined**: 변수가 값이 할당되지 않았음을 나타내는 값.

## 문법

```ts
type Falsy = false | '' | 0 | null | undefined;
```
