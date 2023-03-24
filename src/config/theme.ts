import type { MantineThemeOverride } from '@mantine/core';
import { body, display } from './font';

const themeConfig: MantineThemeOverride = {
  colorScheme: 'light',
  globalStyles: () => ({
    'html, body, div#__next': {
      height: '100%',
    },
    body: {
      maxWidth: '768px',
      margin: '0 auto',
    },
  }),
  fontFamily: `${body.style.fontFamily}, sans-serif`,
  // fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: `${display.style.fontFamily}, sans-serif` },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
  colors: {
    main: [
      'hsl(220, 80%, 94%)',
      'hsl(220, 80%, 90%)',
      'hsl(220, 80%, 86%)',
      'hsl(220, 80%, 77%)',
      'hsl(230, 80%, 68%)',
      'hsl(230, 80%, 59%)',
      'hsl(230, 58%, 50%)',
      'hsl(230, 80%, 41%)',
      'hsl(230, 80%, 32%)',
      'hsl(230, 80%, 23%)',
    ],
  },
  primaryColor: 'main',
};

export default themeConfig;
