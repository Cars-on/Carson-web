import useSidebarFilter from '@/shared/hooks/useSidebarFilter';
import React, { HTMLAttributes } from 'react';
import { IoMdClose } from 'react-icons/io';

import { Container, Text, CloseButton } from './styles';

interface IFilterSelectedItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

const FilterSelectedItem: React.FC<IFilterSelectedItemProps> = ({
  value,
}: IFilterSelectedItemProps) => {
  const { removeFilterValue } = useSidebarFilter();

  return (
    <Container>
      <Text>{value}</Text>
      <CloseButton type="button" onClick={() => removeFilterValue(value)}>
        <IoMdClose />
      </CloseButton>
    </Container>
  );
};

export default FilterSelectedItem;
