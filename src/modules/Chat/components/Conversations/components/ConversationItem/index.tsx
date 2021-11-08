import React from 'react';

import {
  Container,
  Image,
  Paragraph,
  Strong,
  Title,
  HeaderContainer,
  TextContent,
} from './styles';

interface IConversationItemProps {
  photo: string;
  lastMessage: string;
  announcementName: string;
  announcementPrice: string;
}

const ConversationItem: React.FC<IConversationItemProps> = ({
  photo,
  lastMessage,
  announcementName,
  announcementPrice,
}: IConversationItemProps) => {
  return (
    <Container>
      <Image src={photo} alt="conversation photo" />

      <TextContent>
        <HeaderContainer>
          <Title>{announcementName}</Title>
          <Strong>{announcementPrice}</Strong>
        </HeaderContainer>

        <Paragraph>{lastMessage}</Paragraph>
      </TextContent>
    </Container>
  );
};

export default ConversationItem;
