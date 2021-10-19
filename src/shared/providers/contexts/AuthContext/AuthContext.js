import React, { createContext, useState, useEffect } from 'react';

import useAuth from '@/shared/hooks/useAuth'

const Context = createContext();

function AuthProvider({ children }) {
  const contextValues = useAuth();

  return (
    <Context.Provider value={contextValues}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
