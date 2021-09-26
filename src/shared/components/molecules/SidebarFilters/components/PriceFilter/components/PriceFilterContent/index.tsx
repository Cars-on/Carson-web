import React from 'react';

import PriceInput from './components/PriceInput';
import { Container, InputContainer, Text } from './styles';

const PriceFilterContent = () => {
  return (
    <Container>
      <InputContainer>
        <PriceInput placeholder="de" />
        <Text>ex.: 2010</Text>
      </InputContainer>

      <InputContainer>
        <PriceInput placeholder="de" />
        <Text>ex.: 2018</Text>
      </InputContainer>
    </Container>
  );
};

export default PriceFilterContent;
