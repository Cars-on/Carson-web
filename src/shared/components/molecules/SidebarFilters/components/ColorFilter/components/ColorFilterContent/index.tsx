import React from 'react';

import ColorRadioItem from './components/ColorRadioItem';

import { Container } from './styles';

const ColorFilterContent: React.FC = () => {
  return (
    <Container>
      <ColorRadioItem text="Azul" />
      <ColorRadioItem text="Vermelho" />
      <ColorRadioItem text="Roxo" />
      <ColorRadioItem text="Amarelo" />
      <ColorRadioItem text="Rosa" />
      <ColorRadioItem text="Preto" />
      <ColorRadioItem text="Lilas" />
      <ColorRadioItem text="Dourado" />
      <ColorRadioItem text="Prata" />
    </Container>
  );
};

export default ColorFilterContent;
