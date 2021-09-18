import React from 'react';

import CheckboxItem from './components/CheckboxItem';
import { Container } from './styles';

const StateFilterContent: React.FC = () => {
  return (
    <Container>
      <CheckboxItem value="name" />
      <CheckboxItem value="teste" />
      <CheckboxItem value="joao" />
      <CheckboxItem value="ana" />
      <CheckboxItem value="lucas" />
      <CheckboxItem value="carlos" />
    </Container>
  );
};

export default StateFilterContent;
