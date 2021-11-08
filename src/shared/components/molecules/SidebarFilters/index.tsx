import React from 'react';

import YearFilter from './components/YearFilter';
import PriceFilter from './components/PriceFilter';
import StateFilter from './components/StateFilter';
import ModelFilter from './components/ModelFilter';
import ManufacturerFilter from './components/ManufacturerFilter';

import { Container } from './styles';

const SidebarFilters: React.FC = () => {
  return (
    <Container>
      <ModelFilter />
      <hr />
      <StateFilter />
      <hr />
      <ManufacturerFilter />
      <hr />
      <YearFilter />
      <hr />
      <PriceFilter />
    </Container>
  );
};

export default SidebarFilters;
