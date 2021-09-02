import React from 'react';
import { FiMessageCircle, FiUser } from 'react-icons/fi';

import Logo from '../../../assets/icons/complete_logo.svg';
import Button from '../../atoms/Button';

import { Container, Content } from './styles';

const Topbar = () => (
  <Container>
    <Content>
      <Logo />

      <section className="options">
        <Button primary>Anunciar</Button>
        <Button primary icon={FiMessageCircle}>
          Chat
        </Button>
        <Button primary icon={FiUser}>
          Entrar
        </Button>
      </section>
    </Content>
  </Container>
);

export default Topbar;
