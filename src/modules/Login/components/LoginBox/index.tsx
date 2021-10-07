import React from 'react';

import LoginInputs from './components/LoginInputs';

import { Container } from './styles';

const LoginBox = () => {
  return (
    <Container>
      <div className="message-title">
        <h1>Bem-vindo de volta</h1>
        <p>Faça login para seguir.</p>
      </div>
      <LoginInputs />
    </Container>
  );
};

export default LoginBox;
