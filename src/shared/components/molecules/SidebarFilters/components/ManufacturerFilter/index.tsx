import React from 'react';
import { FiTag } from 'react-icons/fi';

import TitleIcon from '@/shared/components/atoms/TitleIcon';

import { Container } from './styles';
import ManufacturerFilterContent from './components/ManufacturerFilterContent';

const manufacturerFilter = () => {
  return (
    <Container>
      <TitleIcon Icon={FiTag} title="Marca" />
      <ManufacturerFilterContent />
    </Container>
  );
};

export default manufacturerFilter;
