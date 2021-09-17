import React from 'react';

import { Container } from './styles';

const Loader = () => {
  return (
    <Container>
      <div className="dotsLoad">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </Container>
  );
};

export default Loader;
