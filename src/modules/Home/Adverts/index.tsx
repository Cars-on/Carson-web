import React from 'react';

import CardAd from '@/shared/components/molecules/CardAd';
import FilterSelected from '@/shared/components/molecules/FilterSelected';

import { Container, Content } from './styles';

const Adverts: React.FC = () => {
  return (
    <Container>
      <FilterSelected />

      <Content>
        <CardAd />

        <CardAd />

        <CardAd />

        <CardAd />

        <CardAd />

        <CardAd />

        <CardAd />

        <CardAd />

        <CardAd />

        <CardAd />

        <CardAd />

        <CardAd />

        <CardAd />

        <CardAd />
      </Content>
    </Container>
  );
};

export default Adverts;
