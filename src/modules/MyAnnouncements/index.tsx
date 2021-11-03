import React, { useEffect, useState } from 'react';

import { IAnnouncement } from '@/shared/dto';
import CardAd from '@/shared/components/molecules/CardAd';

import { Container, Announcements } from './styles';
import { api } from '@/shared/providers/api';

const MyAnnouncements = () => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);

  useEffect(() => {
    async function getMyAnnouncements() {
      const response = await api.get('/announcements-users');

      setAnnouncements(response.data?.announcements);
    }

    getMyAnnouncements();
  }, []);

  return (
    <Container>
      <h1>Meus anuncios</h1>

      <Announcements>
        {announcements?.map(announce => (
          <CardAd announcement={announce} />
        ))}
      </Announcements>
    </Container>
  );
};

export default MyAnnouncements;
