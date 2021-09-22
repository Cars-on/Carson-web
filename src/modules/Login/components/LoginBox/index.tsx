import React from 'react';

import LoginInputs from './components/LoginInputs';
import Button from '@/shared/components/atoms/Button';

import { Container } from './styles';

const LoginBox = () => {
  return (
    <Container>
      <div className="message-title">
        <h1>Bem-vindo de volta</h1>
        <p>Faça login para seguir.</p>
      </div>
      <LoginInputs />
      <div className="button">
        <Button children={'Entrar'} />
      </div>
    </Container>
  );
};

export default LoginBox;
