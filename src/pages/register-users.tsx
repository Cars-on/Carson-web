import React, { useContext, useEffect } from 'react';
import type { NextPage } from 'next';

import RegisterUsersModule from '@/modules/Register/Users';
import { Context } from '@/shared/providers/contexts/AuthContext/AuthContext';

const RegisterUsers: NextPage = () => {
  const { authenticated } = useContext(Context);

  useEffect(() => {
    if (!authenticated) {
      window.location.assign('/login');
    }
  }, [authenticated]);

  return <>{authenticated && <RegisterUsersModule />}</>;
};

export default RegisterUsers;
