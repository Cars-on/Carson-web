import React, { InputHTMLAttributes } from 'react';

import { Container, InputContainer, Text } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  example: string;
}

const Input: React.FC<IInputProps> = ({
  placeholder,
  example,
}: IInputProps) => {
  return (
    <Container>
      <InputContainer placeholder={placeholder} />
      <Text>{example}</Text>
    </Container>
  );
};

export default Input;
