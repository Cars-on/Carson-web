import React from 'react';
import { UploadUsersModalProvider } from './UploadUsersModal';
import { UploadAdsModalProvider } from './UploadAdsModal';
import { SidebarFilterProvider } from './SidebarFilter';

interface ContextProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProps) => (
  <UploadAdsModalProvider>
    <UploadUsersModalProvider>
      <SidebarFilterProvider>{children}</SidebarFilterProvider>
    </UploadUsersModalProvider>
  </UploadAdsModalProvider>
);

export default ContextProvider;
