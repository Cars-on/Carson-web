import React from 'react';
import useUploadUsersModal from '@/shared/hooks/useUploadUsersModal';
import ModalContent from './ModalContent';

const UploadUsersModal = () => {
  const { showUploadUsersModal } = useUploadUsersModal();

  return <> {showUploadUsersModal && <ModalContent />} </>;
};

export default UploadUsersModal;
