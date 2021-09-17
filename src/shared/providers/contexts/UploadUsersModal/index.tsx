import React, { useCallback, useState } from 'react';

import { IUploadUsersModalProvider } from './dto';

import UploadUsersModalContext from './context';
import { api } from '../../api';

const UploadUsersModalProvider: React.FC<IUploadUsersModalProvider> = ({
  children,
}: IUploadUsersModalProvider) => {
  const [csvLot, setCsvLot] = useState('');
  const [csvMessage, setCsvMessage] = useState('');
  const [csvIsLoading, setCsvIsLoading] = useState(false);
  const [showUploadUsersModal, setShowUploadUsersModal] = useState(false);

  const closeUploadUsersModal = useCallback(() => {
    setShowUploadUsersModal(false);
  }, []);

  const openUploadUsersModal = useCallback(() => {
    setShowUploadUsersModal(true);
  }, []);

  async function onDrop(files: any) {
    setCsvIsLoading(true);

    const formData = new FormData();

    formData.append('file', files[0]);

    const response = await api.post('/users/import', formData, {
      headers: { 'content-type': 'multipart/form-data' },
    });

    const { lot, message } = response?.data;

    setCsvLot(lot);
    setCsvMessage(message);
    setCsvIsLoading(false);
    openUploadUsersModal();
  }

  return (
    <UploadUsersModalContext.Provider
      value={{
        showUploadUsersModal,
        closeUploadUsersModal,
        openUploadUsersModal,
        onDrop,
        csvLot,
        csvMessage,
        csvIsLoading,
      }}
    >
      {children}
    </UploadUsersModalContext.Provider>
  );
};

export { UploadUsersModalProvider };
