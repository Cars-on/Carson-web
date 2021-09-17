import type { AppProps } from 'next/app';

import { GlobalStyle } from '@/shared/styles/global';
import Head from '@/shared/seo/Head';
import Topbar from '@/shared/components/molecules/Topbar';
import ContextProvider from '@/shared/providers/contexts';
import UploadUsersModal from '@/shared/components/organisms/UploadUsersModal';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContextProvider>
        <UploadUsersModal />

        <Head />
        <Topbar />
        <Component {...pageProps} />
        <GlobalStyle />
      </ContextProvider>
    </>
  );
}
export default MyApp;
