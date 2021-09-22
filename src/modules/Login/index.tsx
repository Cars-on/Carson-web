import React from 'react';

import LoginBox from './components/LoginBox';

import { Container } from './styles';

const Login = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="content">
          <LoginBox />
        </div>
      </div>
    </Container>
  );
};

export default Login;
