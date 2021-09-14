import React, { useState } from 'react';
import { FiMessageCircle, FiUser } from 'react-icons/fi';

import useIsMobile from '@/shared/hooks/useIsMobile';
import SearchBar from '@/shared/components/molecules/SearchBar';

import logo from '../../../assets/icons/complete_logo.png';
import Button from '../../atoms/Button';

import MobileMenuModal from './MobileMenuModal';

import { Container, Content, SidebarMenu } from './styles';

const Topbar = () => {
  const isMobile = useIsMobile();

  const [showMenuMobile, setMenuMobile] = useState(false);

  function handleOpenMenuMobile() {
    setMenuMobile(!showMenuMobile);
  }

  return (
    <>
      {isMobile && showMenuMobile && <MobileMenuModal />}

      <Container>
        <Content>
          <section className="search">
            <img src={logo} alt="logo" />
            <SearchBar
              placeholder="Digite o modelo ou marca..."
              className="search_bar"
            />
          </section>

          {!isMobile && (
            <section className="options">
              <Button primary>Anunciar</Button>

              <Button primary icon={FiMessageCircle}>
                Chat
              </Button>
              <Button primary icon={FiUser}>
                Entrar
              </Button>
            </section>
          )}

          {isMobile && <SidebarMenu onClick={() => handleOpenMenuMobile()} />}
        </Content>
      </Container>
    </>
  );
};

export default Topbar;
