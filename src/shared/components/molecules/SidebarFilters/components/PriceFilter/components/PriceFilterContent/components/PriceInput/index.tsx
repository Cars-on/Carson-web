import React, { InputHTMLAttributes, useState } from 'react';

import { InputContainer } from './styles';

import { formatBrazilianCurrency } from '@/shared/utils/inputMaskGenerator';
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

    const formattedCurrency = formatBrazilianCurrency(value);

    setInputValue(formattedCurrency);
  };

  return (
    <InputContainer
      placeholder={placeholder}
      onChange={handleInputTyping}
      type="text"
      value={inputValue}
      data-mask="teste"
      maxLength={16}
      {...props}
    />
  );
};

export default PriceInput;
