import React from 'react';

import Contact from './components/Contact';

import { Container } from './styles';

const Ad: React.FC = () => {
  return (
    <Container>
      <div className="content">
        Hello Ad Screen
        <Contact />
      </div>
    </Container>
  );
};

export default Ad;
