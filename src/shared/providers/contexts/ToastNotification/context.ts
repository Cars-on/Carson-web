import React from 'react';

import IToastNotificationContext from './IToastNotificationContext';

const ToastNotificationContext = React.createContext(
  {} as IToastNotificationContext,
);

export default ToastNotificationContext;
