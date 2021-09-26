import React, { InputHTMLAttributes, useState } from 'react';

import { InputContainer } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const YearInput: React.FC<IInputProps> = ({
  placeholder,
  ...props
}: IInputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const newValueWithFourNumber: string =
      value.length > 4 ? value.slice(0, 4) : value;

    setInputValue(newValueWithFourNumber);
  };

  return (
    <InputContainer
      placeholder={placeholder}
      onChange={handleInputTyping}
      type="number"
      value={inputValue}
      {...props}
    />
  );
};

export default YearInput;
