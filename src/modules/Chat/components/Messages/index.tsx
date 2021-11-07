import React from 'react';

import CardAnnouncementInfo from './components/CardAnnouncementInfo';
import MessagesContent from './components/MessagesContent';
import { Container } from './styles';

const Messages = () => {
  return (
    <Container>
      <CardAnnouncementInfo
        carName="Chevrolet Opala"
        location="São josé - SP"
        phoneNumber="(12) 3944-4815"
        price="R$ 150.000"
        userName="Ana Clara"
        year="1992/1992"
      />

      <MessagesContent />
    </Container>
  );
};

export default Messages;
