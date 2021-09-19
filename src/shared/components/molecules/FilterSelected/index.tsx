import useSidebarFilter from '@/shared/hooks/useSidebarFilter';
import React from 'react';

import FilterSelectedItem from './components/FilterSelectedItem';
import { Container } from './styles';

const FilterSelected: React.FC = () => {
  const { filtersValue, removeFilterValue } = useSidebarFilter();

  return (
    <Container>
      {filtersValue.map(filterSelectedItem => (
        <FilterSelectedItem value={filterSelectedItem} />
      ))}
    </Container>
  );
};

export default FilterSelected;
