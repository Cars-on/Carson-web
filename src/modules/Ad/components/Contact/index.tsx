import React, { HTMLAttributes } from 'react';
import Button from '@/shared/components/atoms/Button';
import shieldIcon from '@/shared/assets/icons/shield-icon.png';
import phoneIcone from '@/shared/assets/icons/phone-icon.png';

import { Container } from './styles';

interface IContactProps extends HTMLAttributes<HTMLElement> {
  photo?: string;
  name: string;
  phone: string;
}

const Contact = ({ photo, name, phone }: IContactProps) => {
  return (
    <Container>
      <div className="user-info">
        <div className="user-photo">
          <img src={photo} alt="" />
        </div>
        <div className="name-and-contact">
          <h2>{name}</h2>
          <p>
            <img src={phoneIcone} alt="Phone Icon" />
            {phone}
          </p>
        </div>
      </div>
      <div className="send-message">
        <Button>Enviar Mensagem</Button>
      </div>
      <div className="security-advice">
        <img src={shieldIcon} alt="Dica de Segurança" />
        <p>Não faça pagamentos antes de verificar se o veículo existe.</p>
      </div>
    </Container>
  );
};

export default Contact;
