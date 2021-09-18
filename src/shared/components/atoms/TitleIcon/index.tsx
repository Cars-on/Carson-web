import React from 'react';
import { IconType } from 'react-icons/lib';

import { Container, Title, Image } from './styles';

interface ITitleIconProps {
  Icon?: IconType;
  icon?: string;
  title: string;
}

const TitleIcon: React.FC<ITitleIconProps> = ({
  Icon,
  icon,
  title,
}: ITitleIconProps) => {
  return (
    <Container>
      {Icon ? <Icon /> : <Image src={icon} alt="icon" />}
      <Title>{title}</Title>
    </Container>
  );
};

TitleIcon.defaultProps = {
  icon: '',
};

export default TitleIcon;
