import React, { useCallback, useState } from 'react';

import { InputCheckbox } from './styles';

interface IStateCheckboxItemProps {
  value: string;
}

const StateCheckboxItem: React.FC<IStateCheckboxItemProps> = ({
  value,
}: IStateCheckboxItemProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheckbox = useCallback(() => {
    setChecked(prevState => !prevState);
  }, [setChecked]);

  return (
    <InputCheckbox checked={checked} onClick={handleCheckbox}>
      {value}
    </InputCheckbox>
  );
};

export default StateCheckboxItem;
