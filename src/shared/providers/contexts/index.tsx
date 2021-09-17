import React from 'react';
import { UploadUsersModalProvider } from './UploadUsersModal';

interface ContextProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProps) => (
  <UploadUsersModalProvider>{children}</UploadUsersModalProvider>
);

export default ContextProvider;
