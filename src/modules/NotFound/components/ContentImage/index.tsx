import React from 'react';

import notFoundImage from '@/shared/assets/illustrations/not-found-image.png';

import { Container, Image } from './styles';

const ContentImage = () => {
  return (
    <Container>
      <Image src={notFoundImage} alt="not found page" />
    </Container>
  );
};

export default ContentImage;
