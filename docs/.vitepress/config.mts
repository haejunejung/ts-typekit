import { defineConfig } from 'vitepress';
import en from './en.mts';
import ko from './ko.mts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ts-typekit',
  locales: {
    root: { label: 'English', ...en },
    ko: { label: '한국어', ...ko },
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/haejunejung/ts-typekit' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/ts-typekit' },
    ],
  },
});
