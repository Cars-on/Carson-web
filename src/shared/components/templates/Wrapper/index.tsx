import React from 'react';

import { Container, Content, Wrapper } from './styles';

interface IWrapperContainerProps {
  children: React.ReactNode;
}

const WrapperContainer = ({ children }: IWrapperContainerProps) => {
  return (
    <Container>
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </Container>
  );
};

export default WrapperContainer;
