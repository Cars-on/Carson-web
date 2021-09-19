import React, { useCallback, useState } from 'react';

import { InputCheckbox, Text } from './styles';

interface IBrandCheckedBox {
  Image: string;
  text: string;
}

const BrandCheckboxItem: React.FC<IBrandCheckedBox> = ({
  Image,
  text,
}: IBrandCheckedBox) => {
  const [checked, setChecked] = useState(false);

  const handleCheckbox = useCallback(() => {
    setChecked(prevState => !prevState);
  }, [setChecked]);

  return (
    <InputCheckbox checked={checked} onClick={handleCheckbox}>
      <Image />
      <Text>{text}</Text>
    </InputCheckbox>
  );
};

export default BrandCheckboxItem;
