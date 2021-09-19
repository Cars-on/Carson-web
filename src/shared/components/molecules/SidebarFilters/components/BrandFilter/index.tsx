import React from 'react';
import { FiTag } from 'react-icons/fi';

import TitleIcon from '@/shared/components/atoms/TitleIcon';

import { Container } from './styles';
import BrandFilterContent from './components/BrandFilterContent';

const BrandFilter = () => {
  return (
    <Container>
      <TitleIcon Icon={FiTag} title="Marca" />
      <BrandFilterContent />
    </Container>
  );
};

export default BrandFilter;
