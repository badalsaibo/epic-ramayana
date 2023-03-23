import type { MantineThemeOverride } from '@mantine/core';
import { body, display } from './font';

const themeConfig: MantineThemeOverride = {
  colorScheme: 'light',
  globalStyles: () => ({
    'html, body, div#__next': {
      height: '100%',
    },
  }),
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
};

export default themeConfig;
