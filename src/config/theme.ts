import type { MantineThemeOverride } from '@mantine/core';
import { body, display } from './font';

const themeConfig: MantineThemeOverride = {
  colorScheme: 'light',
  globalStyles: () => ({
    'html, body, div#__next': {
      height: '100%',
    },
  })
};

export default themeConfig;
