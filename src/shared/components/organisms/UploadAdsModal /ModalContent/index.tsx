/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';

import { FiX } from 'react-icons/fi';
import useUploadAdsModal from '@/shared/hooks/useUploadAdsModal';
import Loader from '@/shared/components/atoms/Loader';

import { Container, DivLoader, Modal } from './styles';
import { api } from '@/shared/providers/api';
import { CsvLogs } from './dto';
import CsvLogsComponent from './CsvLogs';
import SuccessComponent from './SuccessComponent';

const ModalContent = () => {
  const { csvIsLoading, csvLot, closeUploadAdsModal } = useUploadAdsModal();

  const [willAdvance, setWillAdvanced] = useState(false);
  const [isLoadingCsvLogs, setIsLoadingCsvLogs] = useState(false);
  const [csvLogs, setCsvLogs] = useState<CsvLogs>(null);

  async function getCsvLogErrors() {
    setIsLoadingCsvLogs(true);

    try {
      const response = await api.get(`/announcements-logs/${csvLot}`);

      setCsvLogs(response?.data);
    } catch (error: any) {
      console.log(error?.response);
    }

    setIsLoadingCsvLogs(false);
  }

  function handleAdvance() {
    setWillAdvanced(true);

    setTimeout(() => {
      getCsvLogErrors();
    }, 500);
  }

  useEffect(() => {
    const body = document.querySelector('body');

    if (body) body.style.overflowX = 'hidden';

    return () => {
      if (body) body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <Container>
      <Modal>
        <FiX className="close" onClick={closeUploadAdsModal} />

        {csvIsLoading || isLoadingCsvLogs ? (
          <DivLoader>
            <Loader />
          </DivLoader>
        ) : csvLogs?.length ? (
          <CsvLogsComponent logs={csvLogs} />
        ) : (
          <SuccessComponent
            onAdvance={handleAdvance}
            willAdvance={willAdvance}
          />
        )}
      </Modal>
    </Container>
  );
};

export default ModalContent;
