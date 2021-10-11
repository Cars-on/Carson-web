import React from 'react';

export interface IFiltersValueProps {
  stateFilter: string;
  colorFilter: string;
  brandFilter: string;
  fromYearFilter: string;
  toYearFilter: string;
  fromPriceFilter: string;
  toPriceFilter: string;
}

export interface ISidebarFilterContextData {
  filtersValue: IFiltersValueProps;
  fetchFilterValue: (payload: object) => void;
  removeFilterValue: (payload: string) => void;
}

export interface ISidebarFilterProvider {
  children: React.ReactNode;
}
