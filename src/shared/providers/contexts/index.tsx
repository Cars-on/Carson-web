import React from 'react';

import { ToastNotificationProvider } from './ToastNotification';
import { UploadUsersModalProvider } from './UploadUsersModal';
import { UploadAdsModalProvider } from './UploadAdsModal';
import { AuthProvider } from './AuthContext/AuthContext';
import { SidebarFilterProvider } from './SidebarFilter';

interface ContextProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProps) => (
  <ToastNotificationProvider>
    <AuthProvider>
      <UploadAdsModalProvider>
        <UploadUsersModalProvider>
          <SidebarFilterProvider>{children}</SidebarFilterProvider>
        </UploadUsersModalProvider>
      </UploadAdsModalProvider>
    </AuthProvider>
  </ToastNotificationProvider>
);

export default ContextProvider;
