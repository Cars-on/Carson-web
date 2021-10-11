import React from 'react';

import { Container, ModalContent } from './styles';

interface IDefaultModalProps {
  children: React.ReactNode;
}

const DefaultModal = ({ children }: IDefaultModalProps) => {
  return (
    <Container>
      <ModalContent>{children}</ModalContent>
    </Container>
  );
};

export default DefaultModal;
