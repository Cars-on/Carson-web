import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Button from '@/shared/components/atoms/Button';
import passwordIcon from '@/shared/assets/icons/password.png';

import { Container, UpdateSection, InputsSection } from './styles';
import { api } from '@/shared/providers/api';

interface IBodyData {
  token: string;
  password: string;
  password_confirmation: string;
}

interface IBodyDataError {
  password: string;
  password_confirmation: string;
}

const ConfirmUser = () => {
  const router = useRouter();
  const { token } = router.query;

  const [bodyData, setBodyData] = useState({} as IBodyData);
  const [errors, setErrors] = useState({} as IBodyDataError);

  function onInputChange(event: any) {
    const { value, name } = event.target;

    setBodyData({
      ...bodyData,
      [name]: value,
    });
  }

  async function handleUpdatePassword() {
    try {
      await api.post('/password/reset', bodyData);
      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (token) {
      setBodyData({ ...bodyData, token });
    }
  }, [token]);

  useEffect(() => {
    if (bodyData?.password && bodyData?.password?.length < 6) {
      setErrors({
        password: 'Senha deve ser maior que 6',
        password_confirmation: '',
      });

      return;
    }

    if (bodyData?.password_confirmation !== bodyData?.password) {
      setErrors({
        password: '',
        password_confirmation: 'Ambas as senhas devem serem iguais',
      });

      return;
    }

    setErrors({ password: '', password_confirmation: '' });
  }, [bodyData]);

  return (
    <Container>
      <UpdateSection>
        <div className="message-title">
          <h1>Atualize sua senha</h1>
          <p>Confirme sua nova senha abaixo.</p>
        </div>

        <InputsSection>
          <div className="input">
            <img src={passwordIcon} alt="" />
            <input
              name="password"
              type="password"
              onChange={onInputChange}
              placeholder="Insira a nova senha"
            />
            <span className="error">{errors.password}</span>
          </div>
          <div className="input">
            <img src={passwordIcon} alt="" />
            <input
              name="password_confirmation"
              type="password"
              onChange={onInputChange}
              placeholder="Confirme a nova senha"
            />
            <span className="error">{errors.password_confirmation}</span>
          </div>
        </InputsSection>

        <div className="button">
          <Button onClick={handleUpdatePassword}>Confirmar</Button>
        </div>
      </UpdateSection>
    </Container>
  );
};

export default ConfirmUser;
