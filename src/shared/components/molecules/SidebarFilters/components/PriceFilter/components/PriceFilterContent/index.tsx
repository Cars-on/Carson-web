import Input from '@/shared/components/atoms/Input';
import React from 'react';

import { Container } from './styles';

const PriceFilterContent = () => {
  return (
    <Container>
      <Input placeholder="de" example="ex.:12.000" />
      <Input placeholder="até" example="ex.:48.000" />
    </Container>
  );
};

export default PriceFilterContent;
