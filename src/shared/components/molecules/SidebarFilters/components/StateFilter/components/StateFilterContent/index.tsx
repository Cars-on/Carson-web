import React from 'react';

import StateCheckboxItem from './components/StateCheckboxItem';
import { Container } from './styles';

const StateFilterContent: React.FC = () => {
  return (
    <Container>
      <StateCheckboxItem value="RO" />
      <StateCheckboxItem value="AC" />
      <StateCheckboxItem value="AM" />
      <StateCheckboxItem value="RR" />
      <StateCheckboxItem value="PA" />
      <StateCheckboxItem value="AP" />
      <StateCheckboxItem value="TO" />
      <StateCheckboxItem value="MA" />
      <StateCheckboxItem value="PI" />
      <StateCheckboxItem value="CE" />
      <StateCheckboxItem value="RN" />
      <StateCheckboxItem value="PB" />
      <StateCheckboxItem value="PE" />
      <StateCheckboxItem value="AL" />
      <StateCheckboxItem value="SE" />
      <StateCheckboxItem value="BA" />
      <StateCheckboxItem value="MG" />
      <StateCheckboxItem value="ES" />
      <StateCheckboxItem value="RJ" />
      <StateCheckboxItem value="SP" />
      <StateCheckboxItem value="PR" />
      <StateCheckboxItem value="SC" />
      <StateCheckboxItem value="RS" />
      <StateCheckboxItem value="MS" />
      <StateCheckboxItem value="MT" />
      <StateCheckboxItem value="GO" />
      <StateCheckboxItem value="DF" />
    </Container>
  );
};

export default StateFilterContent;
