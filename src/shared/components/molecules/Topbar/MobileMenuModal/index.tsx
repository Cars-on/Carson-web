import React from 'react';
import Link from 'next/link';
import { FiMessageCircle, FiShoppingBag, FiUser } from 'react-icons/fi';

import { Container } from './styles';

interface MobileMenuModalProps {
  onClose: () => void;
}

const MobileMenuModal = ({ onClose }: MobileMenuModalProps) => {
  function handleCloseModal() {
    if (onClose) onClose();
  }

  return (
    <Container>
      <ul>
        <li onClick={handleCloseModal}>
          <FiUser />
          Entrar
        </li>
        <Link href="/register_ads">
          <li onClick={handleCloseModal}>
            <FiShoppingBag />
            Anunciar
          </li>
        </Link>
        <Link href="/register-users">
          <li onClick={handleCloseModal}>
            <FiShoppingBag />
            Adicionar Usuários
          </li>
        </Link>
        <li onClick={handleCloseModal}>
          <FiMessageCircle />
          Chat
        </li>
      </ul>
    </Container>
  );
};

export default MobileMenuModal;
