import { useContext } from 'react';

import ToastNotificationContext from '../providers/contexts/ToastNotification/context';

export default function useToastNotification() {
  const context = useContext(ToastNotificationContext);

  console.log(context, 'context');

  if (!context) {
    throw new Error(
      'useToastNotification must be used within an ToastNotificationProvider',
    );
  }

  return context;
}
