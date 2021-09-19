import React from 'react';

import CardAd from '@/shared/components/molecules/CardAd';
import FilterSelected from '@/shared/components/molecules/FilterSelected';

import { Container, Content } from './styles';
import useSidebarFilter from '@/shared/hooks/useSidebarFilter';

const Adverts: React.FC = () => {
  const { filtersValue } = useSidebarFilter();
  console.log(filtersValue);

  return (
    <Container>
      {filtersValue.length && <FilterSelected />}

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
