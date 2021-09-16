import React from 'react';

import userPhoto from '@/shared/assets/people/leo-photo.png';
import phoneIcone from '@/shared/assets/icons/phone-icon.png';
import Button from '@/shared/components/atoms/Button';

import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <Container>
      <div className="content">
        <div className="user-info">
          <img src={userPhoto} alt="" />
          <div className="name-and-contact">
            <h2>Leonardo Messias</h2>
            <p>
              <img src={phoneIcone} alt="Phone Icon" />
              (12) 998888-7777
            </p>
          </div>
          <Button>Enviar Mensagem</Button>
        </div>
        Chat Contact
      </div>
    </Container>
  );
};

export default Contact;
