import { useState, useEffect } from 'react';

import useToastNotification from '@/shared/hooks/useToastNotification';
import { api } from '@/shared/providers/api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const { setMessage, setDescription, setShowToastNotification } = useToastNotification();

  useEffect(() => {
    const token = localStorage.getItem('@crs:token');
    const loggedUser = JSON.parse(localStorage.getItem('@crs:user'));

    if (token && loggedUser) {
      api.defaults.headers.Authorization = `Bearer ${JSON.stringify(token)}`;
      setAuthenticated(true);
      setLoggedUser(loggedUser);
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
      const errorMessage = err.response.data.message;

      if (errorMessage.includes('primeiro acesso')) {
        setMessage('Falha no Login');
        setDescription(errorMessage);
        setShowToastNotification(true);
        return;
      }

      setMessage('Falha no Login');
      setDescription(errorMessage);
      setShowToastNotification(true);

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

  return { authenticated, handleLogin, handleLogout, loading, loggedUser };
}
