import React from 'react';

export interface IFiltersValueProps {
  stateFilter: string;
  colorFilter: string;
  brandFilter: string;
  yearFilter: {
    from: string;
    to: string;
  };
  priceFilter: {
    from: string;
    to: string;
  };
}

export interface ISidebarFilterContextData {
  filtersValue: IFiltersValueProps;
  fetchFilterValue: (payload: object) => void;
  removeFilterValue: (payload: object) => void;
}

export interface ISidebarFilterProvider {
  children: React.ReactNode;
}
