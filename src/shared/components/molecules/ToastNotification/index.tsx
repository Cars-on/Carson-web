import React, { HTMLAttributes } from 'react';
import { FiX } from 'react-icons/fi';

import { Container } from './styles';

interface IToastNotification extends HTMLAttributes<HTMLElement> {
  title?: string;
  message?: string;
  visible: boolean;
  setVisible(showModal: boolean): void;
}

const ToastNotification = ({
  title,
  message,
  visible,
  setVisible,
}: IToastNotification) => {
  return (
    <Container visible={visible}>
      {visible && (
        <div className="text-modal-content-container">
          <FiX color="#0B2926;" size={28} onClick={() => setVisible(false)} />

          <div className="text-container">
            <h3>{title || 'Olá, tudo bem?'}</h3>
            <p>
              {message || 'Esta funcionalidade estará disponível em breve! '}
            </p>
          </div>
        </div>
      )}
    </Container>
  );
};

ToastNotification.defaultProps = {
  title: null,
  message: null,
};

export default ToastNotification;
