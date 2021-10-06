import React, { useContext, useState } from 'react';
import Link from 'next/link';

import Button from '@/shared/components/atoms/Button';
import emailIcon from '@/shared/assets/icons/email.png';
import passwordIcon from '@/shared/assets/icons/password.png';

import { Context } from '@/shared/providers/contexts/AuthContext/AuthContext';
import { Container } from './styles';

const LoginInput = () => {
  const { authenticated, handleLogin } = useContext(Context);

  function initialState() {
    return { email: '', password: '' };
  }

  const [values, setValues] = useState(initialState);

  function onChange(event: any) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <form>
      <Container>
        <div className="email">
          <img src={emailIcon} alt="" />
          <input
            name="email"
            type="text"
            placeholder="seuemail@carson.com"
            onChange={onChange}
            value={values.email}
          />
        </div>
        <div className="password">
          <img src={passwordIcon} alt="" />
          <input
            name="password"
            type="text"
            placeholder="senha"
            onChange={onChange}
            value={values.password}
          />
        </div>
        <div className="forget-password">
          <Link href="/forget-password">
            <p>Esqueceu a senha?</p>
          </Link>
        </div>
        <div className="button">
          <Button children={'Entrar'} onClick={() => handleLogin(values)} />
        </div>
      </Container>
    </form>
  );
};

export default LoginInput;
