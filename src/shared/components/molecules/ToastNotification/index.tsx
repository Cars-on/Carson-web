import React from 'react';
import { FiX } from 'react-icons/fi';

import useToastNotification from 'shared/hooks/useToastNotification';

import { Container } from './styles';

const ToastNotification = () => {
  const {
    message,
    description,
    setShowToastNotification,
    showToastNotification,
  } = useToastNotification();

  return (
    <Container visible={showToastNotification}>
      {showToastNotification && (
        <div className="text-modal-content-container">
          <FiX
            color="#0B2926;"
            size={28}
            onClick={() => setShowToastNotification(false)}
          />

          <div className="text-container">
            <h3>{message || 'Olá, tudo bem?'}</h3>
            <p>
              {description ||
                'Esta funcionalidade estará disponível em breve! '}
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
