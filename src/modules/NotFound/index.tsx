import React from 'react';
import ContentImage from './components/ContentImage';
import ContentText from './components/ContentText';

import { Container, Content } from './styles';

const NotFoundModule: React.FC = () => {
  return (
    <Container>
      <Content>
        <ContentText />
        <ContentImage />
      </Content>
    </Container>
  );
};

export default NotFoundModule;
