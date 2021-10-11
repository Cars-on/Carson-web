import React, { useContext } from 'react';
import Link from 'next/link';
import {
  FiLogOut,
  FiMessageCircle,
  FiShoppingBag,
  FiUser,
} from 'react-icons/fi';

import { Context } from '@/shared/providers/contexts/AuthContext/AuthContext';
import { Container } from './styles';

interface MobileMenuModalProps {
  onClose: () => void;
}

const MobileMenuModal = ({ onClose }: MobileMenuModalProps) => {
  const { handleLogout, authenticated } = useContext(Context);

  function handleCloseModal() {
    if (onClose) onClose();
  }

  return (
    <Container>
      <ul>
        {!authenticated && (
          <li onClick={handleLogout}>
            <FiUser />
            Entrar
          </li>
        )}
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
        {authenticated && (
          <li onClick={handleLogout}>
            <FiLogOut />
            Sair
          </li>
        )}
      </ul>
    </Container>
  );
};

export default MobileMenuModal;
