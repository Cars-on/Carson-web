import React from 'react';

import StateCheckboxItem from './components/StateCheckboxItem';
import { Container } from './styles';

const StateFilterContent: React.FC = () => {
  return (
    <Container>
      <StateCheckboxItem value="SP" />
      <StateCheckboxItem value="RJ" />
      <StateCheckboxItem value="MT" />
      <StateCheckboxItem value="MG" />
      <StateCheckboxItem value="BH" />
      <StateCheckboxItem value="BA" />
      <StateCheckboxItem value="RS" />
      <StateCheckboxItem value="SP" />
      <StateCheckboxItem value="RJ" />
      <StateCheckboxItem value="MT" />
      <StateCheckboxItem value="MG" />
      <StateCheckboxItem value="BH" />
      <StateCheckboxItem value="BA" />
      <StateCheckboxItem value="RS" />
    </Container>
  );
};

export default StateFilterContent;
