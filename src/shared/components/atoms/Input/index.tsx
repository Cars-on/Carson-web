import React, { InputHTMLAttributes, useState } from 'react';

import { Container, InputContainer, Text } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  example: string;
}

const Input: React.FC<IInputProps> = ({
  placeholder,
  example,
}: IInputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const newValueWithFourNumber: string =
      value.length > 4 ? value.slice(0, 4) : value;

    setInputValue(newValueWithFourNumber);
  };

  return (
    <Container>
      <InputContainer
        placeholder={placeholder}
        onChange={handleInputTyping}
        type="number"
        value={inputValue}
      />
      <Text>{example}</Text>
    </Container>
  );
};

export default Input;
