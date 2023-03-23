import type { AppProps } from 'next/app';

import themeConfig from 'config/theme';
import Layout from 'components/Layout';
import HydrationResolver from 'components/HydrationResolver';
import { MantineProvider } from '@mantine/core';

// const globalStyles = (
//   <GlobalStyles
//     styles={{
//       'html, body, div#__next': {
//         height: '100%',
//       },
//     }}
//   />
// );

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={themeConfig}>
      <HydrationResolver>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HydrationResolver>
    </MantineProvider>
  );
}
