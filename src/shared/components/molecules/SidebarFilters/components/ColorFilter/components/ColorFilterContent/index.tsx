import React from 'react';

import ColorRadioItem from './components/ColorRadioItem';

import { Container } from './styles';

const ColorFilterContent: React.FC = () => {
  return (
    <Container>
      <ColorRadioItem text="Azul" />
      <ColorRadioItem text="Azul" />
      <ColorRadioItem text="Azul" />
      <ColorRadioItem text="Azul" />
      <ColorRadioItem text="Azul" />
      <ColorRadioItem text="Azul" />
      <ColorRadioItem text="Azul" />
      <ColorRadioItem text="Azul" />
      <ColorRadioItem text="Azul" />
    </Container>
  );
};

export default ColorFilterContent;
