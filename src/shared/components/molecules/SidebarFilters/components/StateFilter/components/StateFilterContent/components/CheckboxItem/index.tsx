import React, { LabelHTMLAttributes, useCallback, useState } from 'react';

import { InputCheckbox, Label } from './styles';

interface ICheckboxItemProps extends LabelHTMLAttributes<HTMLLabelElement> {
  value: string;
}

const CheckboxItem: React.FC<ICheckboxItemProps> = ({
  value,
}: ICheckboxItemProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheckbox = useCallback(() => {
    setChecked(prevState => !prevState);
  }, [setChecked]);

  return (
    <Label>
      <InputCheckbox
        type="checkbox"
        name={value}
        value={value}
        checked={checked}
        onChange={handleCheckbox}
      />
      {value}
    </Label>
  );
};

export default CheckboxItem;
