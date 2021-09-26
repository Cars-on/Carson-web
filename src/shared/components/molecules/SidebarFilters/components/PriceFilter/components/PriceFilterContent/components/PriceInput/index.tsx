import React, { InputHTMLAttributes, useState } from 'react';

import { InputContainer } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const PriceInput: React.FC<IInputProps> = ({
  placeholder,
  ...props
}: IInputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value);
  };

  return (
    <InputContainer
      placeholder={placeholder}
      onChange={handleInputTyping}
      type="text"
      value={inputValue}
      {...props}
    />
  );
};

export default PriceInput;
