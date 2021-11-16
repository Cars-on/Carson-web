import React, { useContext, useEffect } from 'react';
import type { NextPage } from 'next';

import RegisterAdsModule from '@/modules/Register/Ads';
import { Context } from '@/shared/providers/contexts/AuthContext/AuthContext';

const RegisterAds: NextPage = () => {
  const { authenticated } = useContext(Context);

  useEffect(() => {
    if (!authenticated) {
      window.location.assign('/login');
    }
  }, [authenticated]);

  return <>{authenticated && <RegisterAdsModule />}</>;
};

export default RegisterAds;
