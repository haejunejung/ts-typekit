# Record\<Keys, Type>

:::info
`Record<Type>`은 TypeScript 2.1 이상에서 사용할 수 있는 내장 유틸리티 타입이에요. 자세한 내용은 [타입스크립트 핸드북](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)과 [릴리즈 노트](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#partial-readonly-record-and-pick)를 참고해주세요.
:::

## 개요

`Record<Keys, Type>`은 속성 키가 `Keys`이고 속성 값이 `Type`인 객체 유형을 구성하는 TypeScript에 내장된 유틸리티 타입이에요. 이 유틸리티는 한 유형의 속성을 다른 유형에 매핑하는데 사용할 수 있어요.

## 문법

```ts
type Record<K extends keyof any, T> = { [P in K]: T };
```

- **Keys (K)**: 객체의 키로 사용할 타입이에요.
- **Type (T)**: 객체의 값으로 사용할 타입이에요.

## 예제

#### 예제 #1

```ts
type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
    age: number;
    breed: string;
}

const cats: Record<CatName, CatInfo> = {
    miffy: {age: 10, breed: "Persian"},
    boris: {age: 5, breed: "Maine Coon"},
    mordred: {age: 16, breed: "British Shorthair"}
}
```

#### 예제 #2

```ts
function mapObject <K extends string, T, U> (
    obj: Record<K, T>,
    f: (x: T) => U
): Record<K, U>;

const names = { foo: 'hello', bar: 'world', baz: 'bye' };
const lengths = mapObject (names, s => s.length) // { foo: number, bar: number, baz: number }
```

#### 예제 #3

```ts
function groupBy <T, K extends PropertyKey>(
    items: readonly T[],
    callbackFn: (item: T) => K
): Record<K, T[]> {
    const group = {} as Record<K, T[]>;

    for (const item of items) {
        const key = callbackFn(item);

        if (!(key in group)) {
            group[key] = [];
        }

        group[key].push(item);
    }

    return group;
}
```

#### 예제 #4

```ts
type Team = "frontEnd" | "backEnd" | "devops"

interface Employee {
    name: string;
    age: number;
    hobby: string[];
}

const team: Record<Team, Employee[]> = {
    frontEnd: [],
    backEnd: [],
    devops: [],
};

team.frontEnd.push({
    name: "Ky",
    age: 30,
    hobby: ["hiking", "football"]
})
```