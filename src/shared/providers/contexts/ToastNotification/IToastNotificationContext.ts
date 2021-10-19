interface IToastNotificationContext {
  showToastNotification: boolean;
  message: string;
  description: string;
  setMessage: (text: string) => void;
  setDescription: (text: string) => void;
  setShowToastNotification: (show: boolean) => void;
}

export default IToastNotificationContext;
