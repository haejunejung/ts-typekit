/**
 * A type representing primitive data types in JavaScript.
 *
 * Primitive data types are not objects and do not have methods or properties.
 * This type includes the following:
 *
 * - `string`   : Represents textual data.
 * - `number`   : Represents numeric values, including integers and floating-point numbers.
 * - `boolean`  : Represents a true or false value.
 * - `bigint`   : Represents whole numbers larger than the maximum safe integer in JavaScript.
 * - `symbol`   : Represents a unique and immutable value, often used as object property keys.
 * - `null`     : Represents the intentional absence of any object value.
 * - `undefined`: Represents a variable that has been declared but not yet assigned a value.
 *
 * For more information on primitive data types, see the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 */
export type Primitive =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | null
  | undefined;
