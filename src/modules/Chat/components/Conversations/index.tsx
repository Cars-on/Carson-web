import React from 'react';

import mainImageCar from '@/shared/assets/illustrations/main-image-car.png';

import ConversationItem from './components/ConversationItem';
import { Container } from './styles';

const Conversations: React.FC = () => {
  return (
    <Container>
      <ConversationItem
        photo={mainImageCar}
        announcementName="Audi Série A Preto"
        announcementPrice="R$ 299.400"
        lastMessage="Cara a vida não ta facil para ninguém não. Quer moleza, senta..."
      />
    </Container>
  );
};

export default Conversations;
