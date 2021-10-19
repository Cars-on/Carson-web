import React, { useState, useCallback } from 'react';

import { ISidebarFilterProvider, IFiltersValueProps } from './dto';

import SidebarFilterContext from './context';

const SidebarFilterProvider: React.FC<ISidebarFilterProvider> = ({
  children,
}: ISidebarFilterProvider) => {
  const initialState: IFiltersValueProps = {
    stateFilter: '',
    colorFilter: '',
    manufacturerFilter: '',
    brandFilter: '',
    fromYearFilter: '',
    toYearFilter: '',
    fromPriceFilter: '',
    toPriceFilter: '',
  };

  const [filtersValue, setFiltersValue] =
    useState<IFiltersValueProps>(initialState);

  const fetchFilterValue = useCallback(
    (payload: object) => {
      setFiltersValue({ ...filtersValue, ...payload });
    },
    [filtersValue, setFiltersValue],
  );

  const removeFilterValue = useCallback(
    (payload: string) => {
      setFiltersValue({
        ...filtersValue,
        [payload]: '',
      });
    },
    [filtersValue, setFiltersValue],
  );

  return (
    <SidebarFilterContext.Provider
      value={{
        filtersValue,
        fetchFilterValue,
        removeFilterValue,
      }}
    >
      {children}
    </SidebarFilterContext.Provider>
  );
};

export { SidebarFilterProvider };
