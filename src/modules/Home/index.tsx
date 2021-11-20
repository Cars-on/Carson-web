import React, { useState } from 'react';

import Hero from '@/shared/components/molecules/Hero';
import SidebarFilters from '@/shared/components/molecules/SidebarFilters';
import useIsMobile from '@/shared/hooks/useIsMobile';

import Adverts from './Adverts';
import { Container, Content } from './styles';

const Home: React.FC = () => {
  const isMobile = useIsMobile();
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <Container>
      {isMobile && (
        <>
          {showMobileFilters && (
            <section className="mobile-filters">
              <SidebarFilters />
            </section>
          )}

          <button
            className="open-filter"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            Filtro
          </button>
        </>
      )}
      <Hero />
      <Content>
        {!isMobile && <SidebarFilters />}

        <Adverts />
      </Content>
    </Container>
  );
};

export default Home;
