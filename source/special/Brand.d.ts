/**
 * @description
 * `Brand` is a utility type used to implement a nominal type system in TypeScript.
 *
 * TypeScript primarily uses a structural type system, where types are considered compatible
 * if they have the same structure, even if they are conceptually different.
 *
 * This means that two types with the same structure are interchangeable by default,
 * which can lead to type safety issues.
 *
 * By using the `Brand` type, you can create distinct types with the same underlying structure
 * by adding a unique tag or band to the base type.
 *
 * This allows you to enforce stronger type distinctions, even if the underlying data types are the same.
 *
 * @template BaseType - The base type to be branded, such as `string` or `number`.
 * @template BrandTag - A unique tag or identifier used to distinguish different branded types.
 *
 * @returns
 * A new type that combines the `BaseType` with a unique `BrandTag` to create a distinct type,
 * even though the underlying structure is the same.
 *
 * @example
 * // Defining distinct types with the same underlying type.
 * type USD = Brand<number, 'USD'>;
 * type EUR = Brand<number, 'EUR'>;
 *
 * // Usage
 * const usd = 100 as USD;
 * const eur = 100 as EUR;
 *
 * // Error: Type 'USD' is not assignable to the type 'EUR'
 * const invalidAssignment: EUR = usd;
 */

export type Brand<BaseType, BrandTag> = BaseType & {
  readonly __brand: BrandTag;
};
