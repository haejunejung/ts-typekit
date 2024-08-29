import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'ts-typekit',
  description: '타입스크립트 유틸리티 타입',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '홈', link: '/ko' },
      { text: '레퍼런스', link: '/ko/reference/built-in/Awaited' },
    ],

    sidebar: [
      {
        text: '레퍼런스',
        items: [
          {
            text: 'Built-in',
            items: [
              { text: 'Awaited', link: '/ko/reference/built-in/Awaited' },
              { text: 'Capitalize', link: '/ko/reference/built-in/Capitalize' },
              { text: 'Exclude', link: '/ko/reference/built-in/Exclude' },
              { text: 'Extract', link: '/ko/reference/built-in/Extract' },
              { text: 'Lowercase', link: '/ko/reference/built-in/Lowercase' },
              {
                text: 'NonNullable',
                link: '/ko/reference/built-in/NonNullable',
              },
              { text: 'Omit', link: '/ko/reference/built-in/Omit' },
              { text: 'Parameters', link: '/ko/reference/built-in/Parameters' },
              { text: 'Partial', link: '/ko/reference/built-in/Partial' },
              { text: 'Pick', link: '/ko/reference/built-in/Pick' },
              { text: 'Readonly', link: '/ko/reference/built-in/Readonly' },
              { text: 'Record', link: '/ko/reference/built-in/Record' },
              { text: 'Required', link: '/ko/reference/built-in/Required' },
              { text: 'ReturnType', link: '/ko/reference/built-in/ReturnType' },
              {
                text: 'Uncapitalize',
                link: '/ko/reference/built-in/Uncapitalize',
              },
              { text: 'Uppercase', link: '/ko/reference/built-in/Uppercase' },
            ],
          },
          {
            text: 'Basic',
            items: [
              { text: 'Falsy', link: '/ko/reference/basic/Falsy' },
              { text: 'Nullish', link: '/ko/reference/basic/Nullish' },
              { text: 'Primitive', link: '/ko/reference/basic/Primitive' },
            ],
          },
          {
            text: 'Utilities',
            items: [
              {
                text: 'PickOptional',
                link: '/ko/reference/utilities/PickOptional',
              },
              {
                text: 'PickRequired',
                link: '/ko/reference/utilities/PickRequired',
              },
              {
                text: 'Simplify',
                link: '/ko/reference/utilities/Simplify',
              },
              {
                text: 'StrictExclude',
                link: '/ko/reference/utilities/StrictExclude',
              },
              {
                text: 'StrictExtract',
                link: '/ko/reference/utilities/StrictExtract',
              },
              {
                text: 'StrictOmit',
                link: '/ko/reference/utilities/StrictOmit',
              },
            ],
          },
          {
            text: 'String',
            items: [
              { text: 'Replace', link: '/ko/reference/string/Replace' },
              { text: 'ReplaceAll', link: '/ko/reference/string/ReplaceAll' },
              { text: 'Split', link: '/ko/reference/string/Split' },
              { text: 'WithPrefix', link: '/ko/reference/string/WithPrefix' },
            ],
          },
          {
            text: 'Special',
            items: [{ text: 'Brand', link: '/ko/reference/special/Brand' }],
          },
          {
            text: 'URL Parser',
            items: [
              {
                text: 'ExtractRouteParams',
                link: '/ko/reference/url-parser/ExtractRouteParams',
              },
            ],
          },
          {
            text: 'Predicate',
            items: [
              { text: 'IsAny', link: '/ko/reference/predicate/IsAny' },
              { text: 'IsArray', link: '/ko/reference/predicate/IsArray' },
              { text: 'IsEqual', link: '/ko/reference/predicate/IsEqual' },
              { text: 'IsTuple', link: '/ko/reference/predicate/IsTuple' },
              { text: 'IsNever', link: '/ko/reference/predicate/IsNever' },
              { text: 'IsUnknown', link: '/ko/reference/predicate/IsUnknown' },
            ],
          },
        ],
      },
    ],
  },
});
