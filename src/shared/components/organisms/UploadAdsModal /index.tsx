import React from 'react';
import useUploadAdsModal from '@/shared/hooks/useUploadAdsModal';
import ModalContent from './ModalContent';

const UploadAdsModal = () => {
  const { showUploadAdsModal } = useUploadAdsModal();

  return <> {showUploadAdsModal && <ModalContent />} </>;
};

export default UploadAdsModal;
