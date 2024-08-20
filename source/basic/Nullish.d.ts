/**
 * @description
 * The Nullish type indicates the absence of a value or signifies that a variable has not been initalized.
 *
 * It's purpose is to handle optional properties, variables or function paramters
 * that may no always have a value. It helps enhance the reliability of the code by
 * explicitly handling there `null` or `undefined` cases.
 *
 * The name `Nullish` came from ECMAScript.
 * @see https://tc39.es/ecma262/#:~:text=%E2%80%9Cnullish%E2%80%9D%20values%20(null%20or%20undefined)
 *
 */

export type Nullish = null | undefined;
