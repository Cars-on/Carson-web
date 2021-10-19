import React, { useState } from 'react';

import ToastNotificationContext from './context';

interface ToastNotificationProviderProps {
  children: React.ReactNode;
}

const ToastNotificationProvider = ({
  children,
}: ToastNotificationProviderProps) => {
  const [showToastNotification, setShowToastNotification] = useState(false);
  const [message, setMessage] = useState('');
  const [description, setDescription] = useState('');

  return (
    <ToastNotificationContext.Provider
      value={{
        showToastNotification,
        message,
        description,
        setMessage,
        setDescription,
        setShowToastNotification,
      }}
    >
      {children}
    </ToastNotificationContext.Provider>
  );
};

export { ToastNotificationProvider };
