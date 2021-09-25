import React, { useCallback, useEffect, useState } from 'react';
import useSidebarFilter from '@/shared/hooks/useSidebarFilter';

import { InputCheckbox } from './styles';

interface IStateCheckboxItemProps {
  value: string;
}

const StateCheckboxItem: React.FC<IStateCheckboxItemProps> = ({
  value,
}: IStateCheckboxItemProps) => {
  const [checked, setChecked] = useState(false);

  const { filtersValue, fetchFilterValue, removeFilterValue } =
    useSidebarFilter();

  const handleCheckbox = useCallback(() => {
    setChecked(prevState => !prevState);
  }, [setChecked]);

  const handleSelectFilter = useCallback(() => {
    if (!checked) {
      fetchFilterValue({ stateFilter: value });
    } else {
      removeFilterValue({ stateFilter: value });
    }
  }, [checked, fetchFilterValue, removeFilterValue]);

  useEffect(() => {
    if (filtersValue.stateFilter === value) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [filtersValue, setChecked]);

  return (
    <InputCheckbox
      checked={checked}
      onClick={() => {
        handleCheckbox();
        handleSelectFilter();
      }}
    >
      {value}
    </InputCheckbox>
  );
};

export default StateCheckboxItem;
