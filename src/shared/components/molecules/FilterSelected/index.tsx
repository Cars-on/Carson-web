import useSidebarFilter from '@/shared/hooks/useSidebarFilter';
import React from 'react';

import FilterSelectedItem from './components/FilterSelectedItem';
import { Container } from './styles';

const FilterSelected: React.FC = () => {
  const { filtersValue, removeFilterValue } = useSidebarFilter();

  return (
    <Container>
      {filtersValue.stateFilter && (
        <FilterSelectedItem
          value={filtersValue.stateFilter}
          filterToRemove="stateFilter"
        />
      )}

      {filtersValue.colorFilter && (
        <FilterSelectedItem
          value={filtersValue.colorFilter}
          filterToRemove="colorFilter"
        />
      )}

      {filtersValue.brandFilter && (
        <FilterSelectedItem
          value={filtersValue.brandFilter}
          filterToRemove="brandFilter"
        />
      )}

      {filtersValue.fromYearFilter && (
        <FilterSelectedItem
          value={filtersValue.fromYearFilter}
          filterToRemove="fromYearFilter"
        />
      )}

      {filtersValue.toYearFilter && (
        <FilterSelectedItem
          value={filtersValue.toYearFilter}
          filterToRemove="toYearFilter"
        />
      )}

      {filtersValue.fromPriceFilter && (
        <FilterSelectedItem
          value={filtersValue.fromPriceFilter}
          filterToRemove="fromPriceFilter"
        />
      )}

      {filtersValue.toPriceFilter && (
        <FilterSelectedItem
          value={filtersValue.toPriceFilter}
          filterToRemove="toPriceFilter"
        />
      )}
    </Container>
  );
};

export default FilterSelected;
