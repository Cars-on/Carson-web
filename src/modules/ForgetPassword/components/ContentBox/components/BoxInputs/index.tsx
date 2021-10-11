import React from 'react';
import Link from 'next/link';

import emailIcon from '@/shared/assets/icons/email.png';
import passwordIcon from '@/shared/assets/icons/password.png';

import { Container } from './styles';

interface ILoginInputProps {
  onChange: (e: any) => void;
}

const LoginInput = ({ onChange }: ILoginInputProps) => {
  function handleChange(e: any) {
    if (onChange) onChange(e);
  }

  return (
    <Container>
      <div className="email">
        <img src={emailIcon} alt="" />
        <input
          type="text"
          placeholder="seuemail@carson.com"
          onChange={handleChange}
        />
      </div>
      <div className="forget-password"></div>
    </Container>
  );
};

export default LoginInput;
