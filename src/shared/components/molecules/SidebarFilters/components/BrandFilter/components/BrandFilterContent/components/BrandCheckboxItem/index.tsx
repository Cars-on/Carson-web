import useSidebarFilter from '@/shared/hooks/useSidebarFilter';
import React, { HTMLAttributes, useCallback, useEffect, useState } from 'react';

import { InputCheckbox, Text } from './styles';

interface IBrandCheckedBox extends HTMLAttributes<HTMLDivElement> {
  Image: string;
  text: string;
}

const BrandCheckboxItem: React.FC<IBrandCheckedBox> = ({
  Image,
  text,
}: IBrandCheckedBox) => {
  const [checked, setChecked] = useState(false);

  const { filtersValue, fetchFilterValue, removeFilterValue } =
    useSidebarFilter();

  const handleCheckbox = useCallback(() => {
    setChecked(prevState => !prevState);
  }, [setChecked]);

  const handleSelectFilter = useCallback(() => {
    if (!checked) {
      fetchFilterValue({ brandFilter: text });
    } else {
      removeFilterValue('brandFilter');
    }
  }, [removeFilterValue, fetchFilterValue, checked]);

  useEffect(() => {
    if (filtersValue.brandFilter === text) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [setChecked, filtersValue]);

  return (
    <InputCheckbox
      checked={checked}
      onClick={() => {
        handleCheckbox();
        handleSelectFilter();
      }}
    >
      <Image />
      <Text>{text}</Text>
    </InputCheckbox>
  );
};

export default BrandCheckboxItem;
