# Primitive

## 개요

JavaScript에서 원시 데이터 타입들을 나타내요.

원시 데이터 타입들은 객체가 아니며 메서드나 속성을 가지지 않아요.
이 타입에는 다음과 같은 것들이 포함돼요.

- **string**: 텍스트 데이터를 나타내요.
- **number**: 정수 및 부동 소수점을 포함한 숫자 값을 나타내요.
- **boolean**: 참 또는 거짓의 값을 나타내요.
- **bigint**: JavaScript에서 안전하게 표현할 수 있는 최대 정수보다 큰 정수를 나타내요.
- **symbol**: 고유하고 불변의 값을 나타내며, 주로 객체 속성 키로 사용돼요.
- **null**: 의도적으로 객체 값이 없음을 나타내요.
- **undefined**: 선언되었지만 아직 값이 할당되지 않은 변수를 나타내요.

원시 데이터 타입에 대해서 더 많은 정보가 궁금하다면, [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)를 확인해주세요.

## 문법

```ts
type Primitive = string | number | boolean | bigint | symbol | null | undefined;
```
