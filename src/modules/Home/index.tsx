import React from 'react';

import Hero from '@/shared/components/molecules/Hero';
import SidebarFilters from '@/shared/components/molecules/SidebarFilters';

import Adverts from './Adverts';
import { Container, Content } from './styles';

const Home: React.FC = () => (
  <Container>
    <Hero />
    <Content>
      <SidebarFilters />
      <Adverts />
    </Content>
  </Container>
);

export default Home;
