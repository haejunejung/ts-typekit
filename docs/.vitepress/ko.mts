import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'ts-typekit',
  description: '타입스크립트 유틸리티 타입',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '홈', link: '/ko' },
      { text: '가이드', link: '/ko/what-is-ts-typekit' },
      { text: '레퍼런스', link: '/ko/reference/built-in/Awaited' },
    ],

    sidebar: [
      {
        text: '소개',
        items: [
          { text: 'ts-typekit란 무엇인가?', link: '/ko/what-is-ts-typekit' },
          { text: '시작하기', link: '/ko/getting-started' },
        ],
      },
      {
        text: '레퍼런스',
        items: [
          {
            text: 'Built-in',
            items: [
              { text: 'Awaited', link: '/ko/reference/built-in/Awaited' },
              { text: 'Capitalize', link: '/ko/reference/built-in/Capitalize' },
              { text: 'ConstructorParameters', link: '/ko/reference/built-in/ConstructorParameters' },
              { text: 'Exclude', link: '/ko/reference/built-in/Exclude' },
              { text: 'Extract', link: '/ko/reference/built-in/Extract' },
              { text: 'InstanceType', link: '/ko/reference/built-in/InstanceType' },
              { text: 'Lowercase', link: '/ko/reference/built-in/Lowercase' },
              { text: 'NoInfer', link: '/ko/reference/built-in/NoInfer' },
              { text: 'NonNullable', link: '/ko/reference/built-in/NonNullable' },
              { text: 'Omit', link: '/ko/reference/built-in/Omit' },
            ]
          },
          {
            text: 'Basic',
            items: [{ text: 'Primitive', link: '/ko/reference/basic/Primitive' }],
          },
        ],
      },
    ],
  },
});
