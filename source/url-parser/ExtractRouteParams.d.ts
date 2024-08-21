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
 *
 * @template {string} Route - The route pattern string.
 * @template {string | number | boolean} ParamType - The type of the parameter values.
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
 * Extract parameters from a route pattern, including handling parameter constraints and modifiers.
 *
 * This type recursively parses a route string and extracts parameters, considering optional('?'),
 * repeating('+', '*'), and required parameter modifiers.
 *
 * @template {string} Route - The route pattern string.
 * @template {string | number | boolean} ParamType - The type of the parameter values.
 *
 * @example
 * type T0 = ExtractRouteParams<'/users/:userId/posts/:postId'>;
 * // Result: { userId: string } & { postId: string }
 *
 * type T1 = ExtractRouteParams<'/users/:userId/posts/:postId', number>;
 * // Result: { userId: number } & { postId: number }
 *
 * type T2 = ExtractRouteParams<'/users/:userId(\\d+)', number>;
 * // Result: { userId: number }
 *
 * type T3 = ExtractRouteParams<'/search/:query+'>;
 * // Result: { query: string }
 *
 * type T4 = ExtractRouteParams<'/items/:itemId/:category?'>
 * // Result: { itemId: string } & { category?: string }
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
