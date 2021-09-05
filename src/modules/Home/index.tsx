import React from 'react';

import SearchBar from '@/shared/components/molecules/SearchBar';

import { Container, Content } from './styles';

const Home = () => (
  <Container>
    <Content>
      <SearchBar className="search-bar" />
    </Content>
  </Container>
);

export default Home;
