import React from 'react';
import Input from '../../../../../../atoms/Input';

import { Container } from './styles';

const YearFilterContent: React.FC = () => {
  return (
    <Container>
      <Input placeholder="de" example="ex.:2010" />

      <Input placeholder="até" example="ex.:2018" />
    </Container>
  );
};

export default YearFilterContent;
