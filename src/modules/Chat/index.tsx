import React from 'react';
import Conversations from './components/Conversations';
import Messages from './components/Messages';

import { Container } from './styles';

const ChatModule: React.FC = () => {
  return (
    <Container>
      <Conversations />
      <Messages />
    </Container>
  );
};

export default ChatModule;
