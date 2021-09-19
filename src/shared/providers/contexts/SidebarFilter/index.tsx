import React, { useState, useCallback } from 'react';

import { ISidebarFilterProvider } from './dto';

import SidebarFilterContext from './context';

const SidebarFilterProvider: React.FC<ISidebarFilterProvider> = ({
  children,
}: ISidebarFilterProvider) => {
  const [filtersValue, setFiltersValue] = useState<Array<string>>([]);

  const fetchFilterValue = useCallback(
    (value: string) => {
      setFiltersValue(prevState => [...prevState, value]);
    },
    [setFiltersValue],
  );

  const removeFilterValue = useCallback(
    (value: string) => {
      const newFilterValues = filtersValue.filter(filter => filter !== value);

      setFiltersValue(newFilterValues);
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
