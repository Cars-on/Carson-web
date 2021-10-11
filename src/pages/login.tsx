import React, { useContext } from 'react';

import type { NextPage } from 'next';

import LoginModule from '@/modules/Login';
import { Context } from '@/shared/providers/contexts/AuthContext/AuthContext';

const Login: NextPage = () => {
  const { authenticated } = useContext(Context);
  return <>{!authenticated ? <LoginModule /> : window.location.assign('/')}</>;
};

export default Login;
