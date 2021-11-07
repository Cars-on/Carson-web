import React from 'react';

import shieldIcon from '@/shared/assets/icons/shield-icon.png';
import phoneIcon from '@/shared/assets/icons/phone-icon.png';
import calendarIcon from '@/shared/assets/icons/calendar-icon.png';
import locationIcon from '@/shared/assets/icons/localization-icon.png';

import {
  Icon,
  Price,
  CarName,
  UserName,
  Paragraph,
  Container,
  LittleIcon,
  LiContainer,
  PhoneParagraph,
  PriceContainer,
  WarningParagraph,
  CarInfoContainer,
  WarningContainer,
  UserInfoContainer,
  UserNameContainer,
} from './styles';

interface ICardAnnouncementInfoProps {
  year: string;
  price: string;
  carName: string;
  location: string;
  userName: string;
  phoneNumber: string;
}

const CardAnnouncementInfo: React.FC<ICardAnnouncementInfoProps> = ({
  year,
  price,
  carName,
  location,
  userName,
  phoneNumber,
}: ICardAnnouncementInfoProps) => {
  return (
    <Container>
      <CarInfoContainer>
        <CarName>{carName}</CarName>

        <PriceContainer>
          <Price>{price}</Price>

          <LiContainer>
            <Paragraph>
              <LittleIcon src={calendarIcon} alt="calendar icon" />
              {year}
            </Paragraph>

            <Paragraph>
              <LittleIcon src={locationIcon} alt="location icon" />
              {location}
            </Paragraph>
          </LiContainer>
        </PriceContainer>
      </CarInfoContainer>

      <UserInfoContainer>
        <UserNameContainer>
          <UserName>{userName}</UserName>
          <PhoneParagraph>
            <LittleIcon src={phoneIcon} alt="phone icon" />
            {phoneNumber}
          </PhoneParagraph>
        </UserNameContainer>

        <WarningContainer>
          <Icon src={shieldIcon} alt="shield icon" />
          <WarningParagraph>
            Não faça pagamentos antes de verificar se o veículo existe.
          </WarningParagraph>
        </WarningContainer>
      </UserInfoContainer>
    </Container>
  );
};

export default CardAnnouncementInfo;
