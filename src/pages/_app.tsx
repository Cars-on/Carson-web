import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { GlobalStyle } from '@/shared/styles/global';
import Head from '@/shared/seo/Head';
import Topbar from '@/shared/components/molecules/Topbar';
import ContextProvider from '@/shared/providers/contexts';
import UploadUsersModal from '@/shared/components/organisms/UploadUsersModal';
import UploadAdsModal from '@/shared/components/organisms/UploadAdsModal ';
import Copyrights from '@/shared/components/molecules/Copyrights';
import ToastNotification from '@/shared/components/molecules/ToastNotification';
import ToastNotificationContext from '@/shared/components/molecules/ToastNotification/ToastNotificationContext';

import { AuthProvider } from '@/shared/providers/contexts/AuthContext/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

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

  useEffect(() => {
    const allRoutes = ['/', '/login', '/register-ads', '/register-users'];

    if (
      allRoutes.includes(router.asPath) ||
      router.asPath.slice(0, 4) === '/ad/'
    ) {
      router.push(router.asPath);
    } else {
      router.push('/not-found');
    }
  }, [router.asPath]);

  return (
    <>
      <AuthProvider>
        <ToastNotificationContext.Provider
          value={{
            visible: toastVisibility,
            setVisible: setToastVisibility,
          }}
        >
          <ToastNotification
            visible={toastVisibility}
            setVisible={setToastVisibility}
          />
          <ContextProvider>
            <UploadUsersModal />
            <UploadAdsModal />

            <Head />
            <Topbar setToastVisibility={setToastVisibility} />
            <Component {...pageProps} />
            <Copyrights />
            <GlobalStyle />
          </ContextProvider>
        </ToastNotificationContext.Provider>
      </AuthProvider>
    </>
  );
}
export default MyApp;
