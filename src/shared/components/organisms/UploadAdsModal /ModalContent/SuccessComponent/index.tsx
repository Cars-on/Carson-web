/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import useUploadUsersModal from '@/shared/hooks/useUploadUsersModal';

import { Button } from '../styles';
import { Container } from './styles';

interface SuccessComponentProps {
  onAdvance: () => void;
  willAdvance: boolean;
}

const SuccessComponent = ({
  onAdvance,
  willAdvance,
}: SuccessComponentProps) => {
  const { csvMessage } = useUploadUsersModal();

  function handleOnAdvance() {
    if (onAdvance) onAdvance();
  }

  return (
    <Container willAdvance={willAdvance}>
      <AiFillCheckCircle color="#4fba53" size="120px" />
      <h1>Sucesso!</h1>
      <span>{csvMessage}</span>
      <Button type="button" onClick={handleOnAdvance}>
        Avançar
      </Button>
    </Container>
  );
};

export default SuccessComponent;
