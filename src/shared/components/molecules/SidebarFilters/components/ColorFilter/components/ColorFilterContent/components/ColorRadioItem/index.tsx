import React, { useCallback, useState } from 'react';

import { Container, RadioInput, Text } from './styles';

interface IColorRadioItemProps {
  text: string;
}

const ColorRadioItem: React.FC<IColorRadioItemProps> = ({
  text,
}: IColorRadioItemProps) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = useCallback(() => {
    setChecked(prevState => !prevState);
  }, [setChecked]);

  return (
    <Container onClick={handleChecked}>
      <Text>{text}</Text>
      <RadioInput type="radio" checked={checked} />
    </Container>
  );
};

export default ColorRadioItem;
