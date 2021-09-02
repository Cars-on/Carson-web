import type { AppProps } from 'next/app';

import { GlobalStyle } from '@/shared/styles/global';
import Head from '@/shared/seo/Head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
export default MyApp;
