import React from 'react';
import BrandFilter from './components/BrandFilter';
import ColorFilter from './components/ColorFilter';
import PriceFilter from './components/PriceFilter';
import StateFilter from './components/StateFilter';
import YearFilter from './components/YearFilter';

import { Container } from './styles';

const SidebarFilters: React.FC = () => {
  return (
    <Container>
      <StateFilter />
      <hr />
      <ColorFilter />
      {/* <hr />
      <BrandFilter />
      <hr />
      <YearFilter />
      <hr />
      <PriceFilter /> */}
    </Container>
  );
};

export default SidebarFilters;
