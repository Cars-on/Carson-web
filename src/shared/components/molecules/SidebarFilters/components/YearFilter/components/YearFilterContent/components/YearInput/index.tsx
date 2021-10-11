import React, { InputHTMLAttributes, useState } from 'react';

import { InputContainer } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const YearInput: React.FC<IInputProps> = ({
  placeholder,
  ...props
}: IInputProps) => {
  return <InputContainer placeholder={placeholder} type="number" {...props} />;
};

export default YearInput;
