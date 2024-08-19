# ReplaceAll\<String, Pattern, Replacement>

## 개요

`ReplaceAll<String, Pattern, Replacement>`는 문자열에서 지정된 패턴의 문자열을 모두 대체 문자열로 바꾸는 유틸리티 타입이에요.

## 문법

```ts
type ReplaceAll<
  S extends string,
  Pattern extends string,
  Replacement extends string,
> = S extends `${infer Head}${Pattern}${infer Tail}`
  ? `${Head}${Replacement}${ReplaceAll<Tail, Pattern, Replacement>}`
  : S;
```

- **String (S)** : 치환이 이루어질 문자열이에요.
- **Pattern** : 치환될 부분 문자열 패턴이에요.
- **Replacement** : 패턴을 대체할 부분 문자열이에요.

## 예제

#### 예제 #1

```ts
type T0 = ReplaceAll<'foo.bar.baz', '.', '/'>; // 'foo/bar/baz'
type T1 = ReplaceAll<'__username__', '__', ''>; // 'username'
type T2 = ReplaceAll<'', 'pattern', 'replacement'>; // ''
```

#### 예제 #2

```ts
type BaseDateFormat = 'YYYY-MM-DD';
type DateFormatDot = ReplaceAll<BaseDateFormat, '-', '.'>; // 'YYYY.MM.DD'
type DateFormatSlash = ReplaceAll<BaseDateFormat, '-', '/'>; // 'YYYY/MM/DD'
```
