import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'ts-typekit',
  description: 'A Collection of TypeScript Utility Types',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/what-is-ts-typekit' },
      { text: 'Reference', link: '/reference/built-in/Awaited' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is ts-typekit?', link: '/what-is-ts-typekit' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
      {
        text: 'Reference',
        items: [
          {
            text: 'Built-in',
            items: [
              { text: 'Awaited', link: '/reference/built-in/Awaited' },
              { text: 'Capitalize', link: '/reference/built-in/Capitalize' },
              { text: 'ConstructorParameters', link: '/reference/built-in/ConstructorParameters' },
              { text: 'Exclude', link: '/reference/built-in/Exclude' },
              { text: 'Extract', link: '/reference/built-in/Extract' },
              { text: 'InstanceType', link: '/reference/built-in/InstanceType' },
              { text: 'Lowercase', link: '/reference/built-in/Lowercase' },
              { text: 'NoInfer', link: '/reference/built-in/NoInfer' },
              { text: 'NonNullable', link: '/reference/built-in/NonNullable' },
              { text: 'Omit', link: '/reference/built-in/Omit' },
              { text: 'Partial', link: '/reference/built-in/Partial' },
              { text: 'Pick', link: '/reference/built-in/Pick' },
              { text: 'Readonly', link: '/reference/built-in/Readonly' },
              { text: 'Record', link: '/reference/built-in/Record' },
              { text: 'Required', link: '/reference/built-in/Required' }
            ],
          },
          {
            text: 'Basic',
            items: [{ text: 'Primitive', link: '/reference/basic/Primitive' }],
          },
        ],
      },
    ],
  },
});
