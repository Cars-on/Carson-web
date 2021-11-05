import React from 'react';
import Conversations from './components/Conversations';

import { Container } from './styles';

const ChatModule: React.FC = () => {
  return (
    <Container>
      <Conversations />
    </Container>
  );
};

export default ChatModule;
