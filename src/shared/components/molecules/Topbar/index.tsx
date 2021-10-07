import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { FiMessageCircle, FiUser, FiLogOut } from 'react-icons/fi';

import useIsMobile from '@/shared/hooks/useIsMobile';
import SearchBar from '@/shared/components/molecules/SearchBar';

import logo from '../../../assets/icons/complete_logo.png';
import Button from '../../atoms/TopBarButton';

import MobileMenuModal from './MobileMenuModal';
import { Context } from '@/shared/providers/contexts/AuthContext/AuthContext';

import { Container, Content, SidebarMenu } from './styles';

interface ITopbar {
  setToastVisibility: (visible: boolean) => void;
}

const Topbar: React.FC<ITopbar> = ({ setToastVisibility }: ITopbar) => {
  const { handleLogout, authenticated } = useContext(Context);

  const isMobile = useIsMobile();

  const [showMenuMobile, setMenuMobile] = useState(false);

  function handleOpenMenuMobile() {
    setMenuMobile(!showMenuMobile);
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
              <Link href="/register-users">
                <Button primary>Adicionar Usuários</Button>
              </Link>

              <Link href="/register-ads">
                <Button primary>Anunciar</Button>
              </Link>

              <Button
                onClick={() => setToastVisibility(true)}
                primary
                icon={FiMessageCircle}
              >
                Chat
              </Button>

              {!authenticated && (
                <Link href="/login">
                  <Button primary icon={FiUser}>
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
