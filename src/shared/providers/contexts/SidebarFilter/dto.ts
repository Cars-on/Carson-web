import React from 'react';

export interface ISidebarFilterContextData {
  filtersValue: Array<string>;
  fetchFilterValue: (value: string) => void;
  removeFilterValue: (value: string) => void;
}

export interface ISidebarFilterProvider {
  children: React.ReactNode;
}
