import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

import { GlobalStyle } from '@/shared/styles/global';
import Head from '@/shared/seo/Head';
import Topbar from '@/shared/components/molecules/Topbar';
import ContextProvider from '@/shared/providers/contexts';
import UploadUsersModal from '@/shared/components/organisms/UploadUsersModal';
import UploadAdsModal from '@/shared/components/organisms/UploadAdsModal ';
import Copyrights from '@/shared/components/molecules/Copyrights';
import ToastNotification from '@/shared/components/molecules/ToastNotification';

function MyApp({ Component, pageProps }: AppProps) {
  const [toastVisibility, setToastVisibility] = useState(false);

  useEffect(() => {
    if (toastVisibility) {
      const timerToCloseModal = setTimeout(
        () => setToastVisibility(false),
        8000,
      );

      return () => clearTimeout(timerToCloseModal);
    }
  }, [toastVisibility]);

  return (
    <>
      <ContextProvider>
        <UploadUsersModal />
        <UploadAdsModal />
        <ToastNotification />

        <Head />
        <Topbar setToastVisibility={setToastVisibility} />
        <Component {...pageProps} />
        <Copyrights />
        <GlobalStyle />
      </ContextProvider>
    </>
  );
}
export default MyApp;
