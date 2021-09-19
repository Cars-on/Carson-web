import React from 'react';

import { Container, InputContainer, Text } from './styles';

interface IInputProps {
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
