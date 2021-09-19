import React, { useState } from 'react';
import Link from 'next/link';
import { FiMessageCircle, FiUser } from 'react-icons/fi';

import useIsMobile from '@/shared/hooks/useIsMobile';
import SearchBar from '@/shared/components/molecules/SearchBar';

import logo from '../../../assets/icons/complete_logo.png';
import Button from '../../atoms/Button';

import MobileMenuModal from './MobileMenuModal';

import { Container, Content, SidebarMenu } from './styles';

interface ITopbar {
  setToastVisibility: (visible: boolean) => void;
}

const Topbar: React.FC<ITopbar> = ({ setToastVisibility }: ITopbar) => {
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
              <Link href="/register_users">
                <Button primary>Adicionar Usuários</Button>
              </Link>

              <Link href="/register_ads">
                <Button primary>Anunciar</Button>
              </Link>

              <Button
                onClick={() => setToastVisibility(true)}
                primary
                icon={FiMessageCircle}
              >
                Chat
              </Button>
              <Button
                onClick={() => setToastVisibility(true)}
                primary
                icon={FiUser}
              >
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
