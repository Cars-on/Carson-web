import type { NextPage } from 'next';

import React, { useContext } from 'react';

import RegisterUsersModule from '@/modules/Register/Users';

import { Context } from '@/shared/providers/contexts/AuthContext/AuthContext';

const RegisterUsers: NextPage = () => {
  const { authenticated } = useContext(Context);

  return (
    <>
      {authenticated ? (
        <RegisterUsersModule />
      ) : (
        window.location.assign('/login')
      )}
    </>
  );
};

export default RegisterUsers;
