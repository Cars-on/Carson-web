import React from 'react';
import { UploadUsersModalProvider } from './UploadUsersModal';
import { UploadAdsModalProvider } from './UploadAdsModal';
import { SidebarFilterProvider } from './SidebarFilter';
import { ToastNotificationProvider } from './ToastNotification';

interface ContextProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProps) => (
  <ToastNotificationProvider>
    <UploadAdsModalProvider>
      <UploadUsersModalProvider>
        <SidebarFilterProvider>{children}</SidebarFilterProvider>
      </UploadUsersModalProvider>
    </UploadAdsModalProvider>
  </ToastNotificationProvider>
);

export default ContextProvider;
