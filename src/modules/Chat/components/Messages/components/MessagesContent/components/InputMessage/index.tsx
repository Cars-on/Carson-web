import React from 'react';

import sendIcon from '@/shared/assets/icons/send-icon.png';

import {
  TextareaContainer,
  SendButton,
  Container,
  Textarea,
  Icon,
} from './styles';

const InputMessage: React.FC = () => {
  return (
    <Container>
      <TextareaContainer>
        <Textarea placeholder="Digite a mensagem..." />
      </TextareaContainer>

      <SendButton>
        <Icon src={sendIcon} alt="send icon" />
      </SendButton>
    </Container>
  );
};

export default InputMessage;
