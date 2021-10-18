import router from 'next/router';
import React from 'react';

import successIcon from '@/shared/assets/icons/success_icon.png';
import Button from '@/shared/components/atoms/Button';

import { Figure } from './styles';

const Success = () => {
  function handleNavigateToLogin() {
    router.push('/login');
  }

  return (
    <>
      <div className="message-title">
        <h1>Enviado com sucesso!</h1>
        <p>Confira sua caixa de e-mail</p>
      </div>

      <Figure>
        <img src={successIcon} />
        <span>Tudo perfeito!</span>
      </Figure>

      <div className="button">
        <Button children={'Retornar'} onClick={handleNavigateToLogin} />
      </div>
    </>
  );
};

export default Success;
