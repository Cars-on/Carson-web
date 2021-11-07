import React from 'react';

import { Container, Content, Paragraph } from './styles';

interface IMessageProps {
  message: string;
  isReceivedMessage: boolean;
}

const Message: React.FC<IMessageProps> = ({
  message,
  isReceivedMessage,
}: IMessageProps) => {
  return (
    <Container isReceivedMessage={isReceivedMessage}>
      <Content>
        <Paragraph>{message}</Paragraph>
      </Content>
    </Container>
  );
};

export default Message;
