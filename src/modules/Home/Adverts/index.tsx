import React, { useEffect, useState } from 'react';

import CardAd from '@/shared/components/molecules/CardAd';
import FilterSelected from '@/shared/components/molecules/FilterSelected';

import { Container, Content } from './styles';
import useSidebarFilter from '@/shared/hooks/useSidebarFilter';
import { api } from '@/shared/providers/api';

const Adverts: React.FC = () => {
  const [announcements, setAnnouncements] = useState<{ announcements: [] }>();

  const { filtersValue } = useSidebarFilter();

  useEffect(() => {
    async function getAnnouncement() {
      try {
        const response = await api.get('/announcements');

        setAnnouncements(response.data);
      } catch (error: any) {
        console.log(error?.response);
      }
    }

    getAnnouncement();
  }, []);

  return (
    <>
      {announcements && (
        <Container>
          {filtersValue.length && <FilterSelected />}
          <Content>
            {announcements?.announcements?.map((announcement: any) => (
              <CardAd announcement={announcement} />
            ))}
          </Content>
        </Container>
      )}
    </>
  );
};

export default Adverts;
