import React, { useState } from 'react';

import { ISidebarFilterProvider } from './dto';

import SidebarFilterContext from './context';

const SidebarFilterProvider: React.FC<ISidebarFilterProvider> = ({
  children,
}: ISidebarFilterProvider) => {
  const [filtersValue, setFiltersValue] = useState<Array<string>>([]);

  return (
    <SidebarFilterContext.Provider value={{}}>
      {children}
    </SidebarFilterContext.Provider>
  );
};

export { SidebarFilterProvider };
