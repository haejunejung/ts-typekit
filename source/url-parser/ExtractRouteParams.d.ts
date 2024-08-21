/**
 * @description
 * Defines the different types of parameter modifiers used in URL route patterns.
 * These modifiers determine the nature and constraints of parameters within the route.
 *
 * - `?` (Optional Parameter): Indicates that the parameter is optional and may or may not be present.
 * - `*` (Zero or More Repeating Paramters): Indicates that the parameter can appear zero or more times.
 * - `+` (One or More Repeating Parameters): Indicates that the parameter must appear one or more times.
 * - `''` (Default Required Parameter): Indicates that the paramter is required and must appear exactly once.
 */
type ParameterModifier = '?' | '*' | '+' | '';

/**
 * @description
 * Extracts route optional parameters from a given Route pattern.
 */

type ExtractRouteOptionalParam<
  Route extends string,
  ParamType = string | number | boolean,
> = Route extends `${infer Param}?`
  ? { [K in Param]?: ParamType }
  : Route extends `${infer Param}*`
    ? { [K in Param]?: ParamType }
    : Route extends `${infer Param}+`
      ? { [K in Param]: ParamType }
      : { [K in Route]: ParamType };

/**
 * @description
 * Extracts route parameters from a given Route pattern and maps them to a specified type.
 *
 * This utility type takes a Route pattern as a string and returns an object type where the keys are
 * the dynamic segments of the Route (denoted by `:paramName`) and the values are of a specified type,
 * which is `ParamType`.
 * @template {string} Route - The Route pattern from which to extract route parameters.
 * @template {string | number | boolean} ParamType - The type to assign each extracted route parameters. Defaults to `string`.
 *
 * @example
 * type T0 = ExtractRouteParams<'/users/:userId/posts/:postId'>
 * // Result: { userId: string } & { postId: string }
 *
 * type T1 = ExtractRouteParams<'/users/:userId/posts/:postId', number>
 * // Result: { userId: number, postId: number }
 */

export type ExtractRouteParams<
  Route extends string,
  ParamType = string | number | boolean,
> = string extends Route
  ? { [K in Route]: ParamType }
  : Route extends `${infer Start}:${infer ParamWithOptionalRegExp}/${infer Rest}`
    ? ParamWithOptionalRegExp extends `${infer Param}(${infer _RegExp})${infer Modifier extends ParameterModifier}`
      ? ExtractRouteOptionalParam<`${Param}${Modifier}`, ParamType> &
          ExtractRouteParams<Rest, ParamType>
      : ExtractRouteOptionalParam<ParamWithOptionalRegExp, ParamType> &
          ExtractRouteParams<Rest, ParamType>
    : Route extends `${infer Start}:${infer ParamWithOptionalRegExp}`
      ? ParamWithOptionalRegExp extends `${infer Param}(${infer _RegExp})${infer Modifier extends ParameterModifier}`
        ? ExtractRouteOptionalParam<`${Param}${Modifier}`, ParamType>
        : ExtractRouteOptionalParam<`${ParamWithOptionalRegExp}`, ParamType>
      : {};
