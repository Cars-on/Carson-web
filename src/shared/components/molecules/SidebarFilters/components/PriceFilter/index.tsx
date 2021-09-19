import React from 'react';
import { FiDollarSign } from 'react-icons/fi';

import TitleIcon from '@/shared/components/atoms/TitleIcon';
import PriceFilterContent from './components/PriceFilterContent';

import { Container } from './styles';

const PriceFilter: React.FC = () => {
  return (
    <Container>
      <TitleIcon Icon={FiDollarSign} title="Preço" />
      <PriceFilterContent />
    </Container>
  );
};

export default PriceFilter;
