import type { AppProps } from 'next/app';

import { GlobalStyle } from '@/shared/styles/global';
import Head from '@/shared/seo/Head';
import Topbar from '@/shared/components/molecules/Topbar';
import Copyrights from '@/shared/components/molecules/Copyrights';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Topbar />
      <Component {...pageProps} />
      <Copyrights />
      <GlobalStyle />
    </>
  );
}
export default MyApp;
