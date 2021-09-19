import { createContext } from 'react';
import { ISidebarFilterContextData } from './dto';

const SidebarFilterContext = createContext({} as ISidebarFilterContextData);

export default SidebarFilterContext;
