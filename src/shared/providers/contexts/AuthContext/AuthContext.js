import React, { createContext, useState, useEffect } from 'react';

import { api } from '@/shared/providers/api';
// import history from '@/shared/utils/history'

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.stringify(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin({ email, password }) {
    try {
      const {
        response: { token },
      } = await api.post('/sessions', {
        email,
        password,
      });

      localStorage.setItem('token', JSON.stringify(token));
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      // history.push('/')
    } catch (err) {
      const errorData = err.response?.data;
      return console.log(errorData);
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    // history.push('/login')
  }

  if (loading) {
    return <h1>Loading... </h1>;
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
