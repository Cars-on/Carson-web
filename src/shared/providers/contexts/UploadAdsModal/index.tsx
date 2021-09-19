import React, { useCallback, useState } from 'react';

import { IUploadAdsModalProvider } from './dto';

import UploadAdsModalContext from './context';
import { api } from '../../api';

const UploadAdsModalProvider: React.FC<IUploadAdsModalProvider> = ({
  children,
}: IUploadAdsModalProvider) => {
  const [csvLot, setCsvLot] = useState('');
  const [csvMessage, setCsvMessage] = useState('');
  const [csvIsLoading, setCsvIsLoading] = useState(false);
  const [showUploadAdsModal, setShowUploadAdsModal] = useState(false);

  const closeUploadAdsModal = useCallback(() => {
    setShowUploadAdsModal(false);
  }, []);

  const openUploadAdsModal = useCallback(() => {
    setShowUploadAdsModal(true);
  }, []);

  async function onDrop(files: any) {
    setCsvIsLoading(true);

    const formData = new FormData();

    formData.append('file', files[0]);

    const response = await api.post('/announcements/import', formData, {
      headers: { 'content-type': 'multipart/form-data' },
    });

    const { lot, message } = response?.data;

    setCsvLot(lot);
    setCsvMessage(message);
    setCsvIsLoading(false);
    openUploadAdsModal();
  }

  return (
    <UploadAdsModalContext.Provider
      value={{
        showUploadAdsModal,
        closeUploadAdsModal,
        openUploadAdsModal,
        onDrop,
        csvLot,
        csvMessage,
        csvIsLoading,
      }}
    >
      {children}
    </UploadAdsModalContext.Provider>
  );
};

export { UploadAdsModalProvider };
