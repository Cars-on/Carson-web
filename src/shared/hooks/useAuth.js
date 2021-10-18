import { useState, useEffect } from 'react';

import { api } from '@/shared/providers/api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('@crs:token');
    const user = localStorage.getItem('@crs:user');

    if (token && user) {
      api.defaults.headers.Authorization = `Bearer ${JSON.stringify(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin({ email, password }) {
    try {
      const {
        data: { token, user },
      } = await api.post('/sessions', {
        email,
        password,
      });

      localStorage.setItem('@crs:token', JSON.stringify(token));
      localStorage.setItem('@crs:user', JSON.stringify(user));
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      window.location.assign('/');
    } catch (err) {
      return console.log(err);
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('@crs:token');
    localStorage.removeItem('@crs:user');
    api.defaults.headers.Authorization = undefined;
    window.location.assign('/login');
  }

  if (loading) {
    return <h3>Loading... </h3>;
  }

  return { authenticated, handleLogin, handleLogout, loading };
}
