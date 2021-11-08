import React from 'react';
import Message from './components/Message';

import { Container } from './styles';

const MessagesContent: React.FC = () => {
  return (
    <Container>
      <Message message="teste" isReceivedMessage={true} />
      <Message
        message="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        isReceivedMessage={false}
      />
      <Message
        message="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        isReceivedMessage={false}
      />
    </Container>
  );
};

export default MessagesContent;
