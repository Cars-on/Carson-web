import React from 'react';
import { UploadUsersModalProvider } from './UploadUsersModal';
import { UploadAdsModalProvider } from './UploadAdsModal';

interface ContextProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProps) => (
  <UploadAdsModalProvider>
    <UploadUsersModalProvider>{children}</UploadUsersModalProvider>
  </UploadAdsModalProvider>
);

export default ContextProvider;
