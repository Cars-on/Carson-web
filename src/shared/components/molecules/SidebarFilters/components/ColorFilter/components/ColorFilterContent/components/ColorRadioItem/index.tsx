import React, { HTMLAttributes, useCallback, useState, useEffect } from 'react';

import useSidebarFilter from '@/shared/hooks/useSidebarFilter';
import { Container, RadioInput, Text } from './styles';

interface IColorRadioItemProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

const ColorRadioItem: React.FC<IColorRadioItemProps> = ({
  text,
}: IColorRadioItemProps) => {
  const [checked, setChecked] = useState(false);

  const { filtersValue, fetchFilterValue, removeFilterValue } =
    useSidebarFilter();

  const handleChecked = useCallback(() => {
    setChecked(prevState => !prevState);
  }, [setChecked]);

  const handleSelectFilter = useCallback(() => {
    if (!checked) {
      fetchFilterValue({ colorFilter: text });
    } else {
      removeFilterValue({ colorFilter: '' });
    }
  }, [checked, fetchFilterValue, removeFilterValue]);

  useEffect(() => {
    if (filtersValue.colorFilter === text) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [filtersValue, setChecked]);

  return (
    <Container
      onClick={() => {
        handleChecked();
        handleSelectFilter();
      }}
    >
      <Text>{text}</Text>
      <RadioInput type="radio" checked={checked} />
    </Container>
  );
};

export default ColorRadioItem;
