import React from 'react';

import FilterSelectedItem from './components/FilterSelectedItem';
import { Container } from './styles';

const FilterSelected: React.FC = () => {
  return (
    <Container>
      <FilterSelectedItem value="value" />
    </Container>
  );
};

export default FilterSelected;
