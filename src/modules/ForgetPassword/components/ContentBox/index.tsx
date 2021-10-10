import React from 'react';

import BoxInputs from './components/BoxInputs';
import Button from '@/shared/components/atoms/Button';

import { Container } from './styles';

const LoginBox = () => {
  return (
    <Container>
      <div className="message-title">
        <h1>Confirme seu e-mail</h1>
        <p>Digite o e-mail da sua conta.</p>
      </div>
      <BoxInputs />
      <div className="button">
        <Button children={'Confirmar'} />
      </div>
    </Container>
  );
};

export default LoginBox;
