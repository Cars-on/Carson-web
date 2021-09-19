import { useContext } from 'react';

import SidebarFilterContext from '../providers/contexts/SidebarFilter/context';
import { ISidebarFilterContextData } from '../providers/contexts/SidebarFilter/dto';

export default function useSidebarFilter(): ISidebarFilterContextData {
  const context = useContext(SidebarFilterContext);

  if (!context) {
    throw new Error(
      'useSidebarFilter must be used within an SidebarFilterProvider',
    );
  }

  return context;
}
