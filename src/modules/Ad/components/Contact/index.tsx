import React, { HTMLAttributes } from 'react';
import Button from '@/shared/components/atoms/TopBarButton';
import shieldIcon from '@/shared/assets/icons/shield-icon.png';
import phoneIcone from '@/shared/assets/icons/phone-icon.png';

import { Container } from './styles';

interface IContactProps extends HTMLAttributes<HTMLElement> {
  name: string;
  phone: string;
  email: string;
}

const Contact = ({ name, email, phone }: IContactProps) => {
  function handleOpenChat() {
    const loggedUser = JSON.parse(localStorage.getItem('@crs:user'));

    window.open(
      `http://localhost:9999/chat.html?name=${loggedUser?.name}&email=${loggedUser?.email}&ad_owner_name=${name}&ad_owner_email=${email}`,
    );
  }

  return (
    <Container>
      <div className="user-info">
        <div className="name-and-contact">
          <h2>{name}</h2>
          <p>
            <img src={phoneIcone} alt="Phone Icon" />
            {phone}
          </p>
        </div>
      </div>
      <div className="send-message">
        <Button onClick={handleOpenChat}>Enviar Mensagem</Button>
      </div>
      <div className="security-advice">
        <img src={shieldIcon} alt="Dica de Segurança" />
        <p>Não faça pagamentos antes de verificar se o veículo existe.</p>
      </div>
    </Container>
  );
};

export default Contact;
