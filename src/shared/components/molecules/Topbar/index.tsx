import React, { useState, useContext } from 'react';
import Link from 'next/link';
import {
  FiMessageCircle,
  FiUser,
  FiLogOut,
  FiGrid,
  FiUsers,
} from 'react-icons/fi';

import useIsMobile from '@/shared/hooks/useIsMobile';
import SearchBar from '@/shared/components/molecules/SearchBar';

import logo from '../../../assets/icons/complete_logo.png';
import Button from '../../atoms/TopBarButton';

import MobileMenuModal from './MobileMenuModal';
import { Context } from '@/shared/providers/contexts/AuthContext/AuthContext';

import { Container, Content, SidebarMenu } from './styles';
import { useRouter } from 'next/router';

interface ITopbar {
  setToastVisibility: (visible: boolean) => void;
}

const Topbar: React.FC<ITopbar> = ({ setToastVisibility }: ITopbar) => {
  const router = useRouter();
  const { handleLogout, authenticated, loggedUser } = useContext(Context);

  const isMobile = useIsMobile();

  const [showMenuMobile, setMenuMobile] = useState(false);

  function handleOpenMenuMobile() {
    setMenuMobile(!showMenuMobile);
  }

  function handleOpenUserChat() {
    router.push(`/chat?name=${loggedUser?.name}&email=${loggedUser?.email}`);
  }

  return (
    <>
      {isMobile && showMenuMobile && (
        <MobileMenuModal onClose={handleOpenMenuMobile} />
      )}

      <Container>
        <Content>
          <section className="search">
            <Link href="/">
              <img src={logo} alt="logo" />
            </Link>
            <SearchBar
              placeholder="Digite o modelo ou marca..."
              className="search_bar"
            />
          </section>

          {!isMobile && (
            <section className="options">
              {authenticated && loggedUser?.role !== 'USER' && (
                <Link href="/register-users">
                  <Button primary>Adicionar Usuários</Button>
                </Link>
              )}

              <Link href="/register-ads">
                <Button primary>Anunciar</Button>
              </Link>

              {authenticated && (
                <Link href="/announcements">
                  <Button primary icon={FiGrid}>
                    Meus anúncios
                  </Button>
                </Link>
              )}

              {authenticated && (
                <Button
                  onClick={handleOpenUserChat}
                  primary
                  icon={FiMessageCircle}
                >
                  Chat
                </Button>
              )}

              {authenticated && (
                <Link href="/user">
                  <Button primary icon={FiUser}>
                    {loggedUser?.name}
                  </Button>
                </Link>
              )}

              {!authenticated && (
                <Link href="/login">
                  <Button primary icon={FiUsers}>
                    Entrar
                  </Button>
                </Link>
              )}

              {authenticated && (
                <Button onClick={handleLogout} primary icon={FiLogOut}>
                  Sair
                </Button>
              )}
            </section>
          )}

          {isMobile && <SidebarMenu onClick={() => handleOpenMenuMobile()} />}
        </Content>
      </Container>
    </>
  );
};

export default Topbar;
