import React, { useContext } from 'react';

import type { NextPage } from 'next';

import { Context } from '@/shared/providers/contexts/AuthContext/AuthContext';

import RegisterAdsModule from '@/modules/Register/Ads';

const RegisterAds: NextPage = () => {
  const { authenticated } = useContext(Context);

  return (
    <>
      {authenticated ? <RegisterAdsModule /> : window.location.assign('/login')}
    </>
  );
};

export default RegisterAds;
