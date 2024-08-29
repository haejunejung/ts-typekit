import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'ts-typekit',
  description: 'A Collection of TypeScript Utility Types',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Reference', link: '/reference/built-in/Awaited' },
    ],

    sidebar: [
      {
        text: 'Reference',
        items: [
          {
            text: 'Built-in',
            items: [
              { text: 'Awaited', link: '/reference/built-in/Awaited' },
              { text: 'Capitalize', link: '/reference/built-in/Capitalize' },
              { text: 'Exclude', link: '/reference/built-in/Exclude' },
              { text: 'Extract', link: '/reference/built-in/Extract' },
              { text: 'Lowercase', link: '/reference/built-in/Lowercase' },
              { text: 'NonNullable', link: '/reference/built-in/NonNullable' },
              { text: 'Omit', link: '/reference/built-in/Omit' },
              { text: 'Parameters', link: '/reference/built-in/Parameters' },
              { text: 'Partial', link: '/reference/built-in/Partial' },
              { text: 'Pick', link: '/reference/built-in/Pick' },
              { text: 'Readonly', link: '/reference/built-in/Readonly' },
              { text: 'Record', link: '/reference/built-in/Record' },
              { text: 'Required', link: '/reference/built-in/Required' },
              { text: 'ReturnType', link: '/reference/built-in/ReturnType' },
              {
                text: 'Uncapitalize',
                link: '/reference/built-in/Uncapitalize',
              },
              { text: 'Uppercase', link: '/reference/built-in/Uppercase' },
            ],
          },
          {
            text: 'Basic',
            items: [
              { text: 'Falsy', link: '/reference/basic/Falsy' },
              { text: 'Nullish', link: '/reference/basic/Nullish' },
              { text: 'Primitive', link: '/reference/basic/Primitive' },
            ],
          },
          {
            text: 'Utilities',
            items: [
              {
                text: 'PickOptional',
                link: '/reference/utilities/PickOptional',
              },
              {
                text: 'PickRequired',
                link: '/reference/utilities/PickRequired',
              },
              {
                text: 'Simplify',
                link: '/reference/utilities/Simplify',
              },
              {
                text: 'StrictExclude',
                link: '/reference/utilities/StrictExclude',
              },
              {
                text: 'StrictExtract',
                link: '/reference/utilities/StrictExtract',
              },
              {
                text: 'StrictOmit',
                link: '/reference/utilities/StrictOmit',
              },
            ],
          },
          {
            text: 'String',
            items: [
              { text: 'Replace', link: '/reference/string/Replace' },
              { text: 'ReplaceAll', link: '/reference/string/ReplaceAll' },
              { text: 'Split', link: '/reference/string/Split' },
              { text: 'WithPrefix', link: '/reference/string/WithPrefix' },
            ],
          },
          {
            text: 'Special',
            items: [{ text: 'Brand', link: '/reference/special/Brand' }],
          },
          {
            text: 'URL Parser',
            items: [
              {
                text: 'ExtractRouteParams',
                link: '/reference/url-parser/ExtractRouteParams',
              },
            ],
          },
          {
            text: 'Predicate',
            items: [
              { text: 'IsAny', link: '/reference/predicate/IsAny' },
              { text: 'IsArray', link: '/reference/predicate/IsArray' },
              { text: 'IsEqual', link: '/reference/predicate/IsEqual' },
              { text: 'IsTuple', link: '/reference/predicate/IsTuple' },
              { text: 'IsNever', link: '/reference/predicate/IsNever' },
              { text: 'IsUnknown', link: '/reference/predicate/IsUnknown' },
            ],
          },
        ],
      },
    ],
  },
});
