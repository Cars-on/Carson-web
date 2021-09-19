import React from 'react';
import { IoMdClose } from 'react-icons/io';

import { Container, Text, CloseButton } from './styles';

interface IFilterSelectedItemProps {
  value: string;
}

const FilterSelectedItem: React.FC<IFilterSelectedItemProps> = ({
  value,
}: IFilterSelectedItemProps) => {
  return (
    <Container>
      <Text>{value}</Text>
      <CloseButton type="button" onClick={() => {}}>
        <IoMdClose />
      </CloseButton>
    </Container>
  );
};

export default FilterSelectedItem;
