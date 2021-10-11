import React, { useState } from 'react';
import { useRouter } from 'next/router';

import BoxInputs from './components/BoxInputs';
import Button from '@/shared/components/atoms/Button';

import { Container } from './styles';
import { api } from '@/shared/providers/api';
import Success from './Success';

const LoginBox = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e: any) {
    setEmail(e?.target?.value);
  }

  async function handleSubmitForgetPassword() {
    setSuccess(false);
    setLoader(true);

    try {
      await api.post('/password/forgot', { email });
      setSuccess(true);
    } catch (error: any) {
      console.log(error.response);
    }

    setLoader(false);
  }

  return (
    <Container>
      {!loader && !success ? (
        <>
          <div className="message-title">
            <h1>Confirme seu e-mail</h1>
            <p>Digite o e-mail da sua conta.</p>
          </div>
          <BoxInputs onChange={handleChange} />
          <div className="button">
            <Button
              children={'Confirmar'}
              onClick={handleSubmitForgetPassword}
            />
          </div>
        </>
      ) : (
        <Success />
      )}
    </Container>
  );
};

export default LoginBox;
