import React, { InputHTMLAttributes } from 'react';

import { InputContainer } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const PriceInput: React.FC<IInputProps> = ({
  placeholder,
  ...props
}: IInputProps) => {
  return (
    <InputContainer
      placeholder={placeholder}
      type="text"
      maxLength={16}
      {...props}
    />
  );
};

export default PriceInput;
