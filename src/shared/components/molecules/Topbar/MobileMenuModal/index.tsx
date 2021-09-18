import React from 'react';
import { FiMessageCircle, FiShoppingBag, FiUser } from 'react-icons/fi';

import { Container } from './styles';

const MobileMenuModal: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <FiUser />
          Entrar
        </li>
        <li>
          <FiShoppingBag />
          Anunciar
        </li>
        <li>
          <FiMessageCircle />
          Chat
        </li>
      </ul>
    </Container>
  );
};

export default MobileMenuModal;
