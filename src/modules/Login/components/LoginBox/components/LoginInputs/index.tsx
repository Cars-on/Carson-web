import React, { useState } from 'react';
import Link from 'next/link';

import emailIcon from '@/shared/assets/icons/email.png';
import passwordIcon from '@/shared/assets/icons/password.png';

import { Container } from './styles';

function initialState() {
  return { user: '', password: '' };
}

const LoginInput = () => {
  const [values, setValues] = useState(initialState);

  function onChange(event: any) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <form onChange={onChange}>
      <Container>
        <div className="email">
          <img src={emailIcon} alt="" />
          <input
            name="user"
            type="text"
            placeholder="seuemail@carson.com"
            onChange={onChange}
            value={values.user}
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
      </Container>
    </form>
  );
};

export default LoginInput;
