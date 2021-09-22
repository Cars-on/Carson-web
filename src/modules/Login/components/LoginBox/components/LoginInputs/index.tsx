import React from 'react';

import emailIcon from '@/shared/assets/icons/email.png';
import passwordIcon from '@/shared/assets/icons/password.png';

import { Container } from './styles';

const LoginInput = () => {
  return (
    <Container>
      <div className="email">
        <img src={emailIcon} alt="" />
        <input type="text" placeholder="seuemail@carson.com" />
      </div>
      <div className="password">
        <img src={passwordIcon} alt="" />
        <input type="text" placeholder="senha" />
      </div>
    </Container>
  );
};

export default LoginInput;
