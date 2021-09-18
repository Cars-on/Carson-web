import React from 'react';
import StateFilter from './components/StateFilter';

import { Container } from './styles';

const SidebarFilters: React.FC = () => {
  return (
    <Container>
      <StateFilter />
      <h1>Filtro 1</h1>

      <h1>Filtro 2</h1>

      <h1>Filtro 3</h1>
    </Container>
  );
};

export default SidebarFilters;
