import React from 'react';

import InputMessage from './components/InputMessage';
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
        message="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        isReceivedMessage={false}
      />
      <Message
        message="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        isReceivedMessage={true}
      />

      <InputMessage />
    </Container>
  );
};

export default MessagesContent;
