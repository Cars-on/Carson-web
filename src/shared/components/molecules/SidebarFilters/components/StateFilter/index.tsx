import React from 'react';
import { GrLocation } from 'react-icons/gr';

import TitleIcon from '@/shared/components/atoms/TitleIcon';
import { Container } from './styles';
import StateFilterContent from './components/StateFilterContent';

const StateFilter: React.FC = () => {
  return (
    <Container>
      <TitleIcon Icon={GrLocation} title="Escolha o seu estado" />
      <StateFilterContent />
    </Container>
  );
};

export default StateFilter;
