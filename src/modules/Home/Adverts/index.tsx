import React, { useEffect, useState } from 'react';

import CardAd from '@/shared/components/molecules/CardAd';
import FilterSelected from '@/shared/components/molecules/FilterSelected';

import { Container, Content } from './styles';
import useSidebarFilter from '@/shared/hooks/useSidebarFilter';
import { api } from '@/shared/providers/api';

const Adverts: React.FC = () => {
  const [announcement, setAnnouncement] = useState([{}]);

  const { filtersValue } = useSidebarFilter();

  useEffect(() => {
    async function getAnnouncement() {
      try {
        const response = await api.get('/announcements?page=1&per_page=50');

        setAnnouncement(response.data);
      } catch (error: any) {
        console.log(error?.response);
      }
    }

    getAnnouncement();
  }, [api, setAnnouncement]);

  console.log(announcement);

  return (
    <Container>
      {filtersValue.length && <FilterSelected />}
      <Content></Content>
    </Container>
  );
};

export default Adverts;
