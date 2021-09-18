import type { AppProps } from 'next/app';

import { GlobalStyle } from '@/shared/styles/global';
import Head from '@/shared/seo/Head';
import Topbar from '@/shared/components/molecules/Topbar';
import ContextProvider from '@/shared/providers/contexts';
import UploadUsersModal from '@/shared/components/organisms/UploadUsersModal';
import Copyrights from '@/shared/components/molecules/Copyrights';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContextProvider>
        <UploadUsersModal />

        <Head />
        <Topbar />
        <Component {...pageProps} />
        <Copyrights />
        <GlobalStyle />
      </ContextProvider>
    </>
  );
}
export default MyApp;
