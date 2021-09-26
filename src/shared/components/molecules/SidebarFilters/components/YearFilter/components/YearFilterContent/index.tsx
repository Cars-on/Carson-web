import React from 'react';

import YearInput from './components/YearInput';
import { Container, InputContainer, Text } from './styles';

const YearFilterContent: React.FC = () => {
  return (
    <Container>
      <InputContainer>
        <YearInput placeholder="de" />
        <Text>ex.: 2010</Text>
      </InputContainer>

      <InputContainer>
        <YearInput placeholder="de" />
        <Text>ex.: 2018</Text>
      </InputContainer>
    </Container>
  );
};

export default YearFilterContent;
