import React, { useEffect, useState } from 'react';

import { IAnnouncement } from '@/shared/dto';
import CardAd from '@/shared/components/molecules/CardAd';

import { Container, Content, Announcements } from './styles';
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
      <Content>
        <h1>Meus anúncios</h1>

        <Announcements>
          {announcements?.map(announce => (
            <CardAd announcement={announce} isDeleteable />
          ))}
        </Announcements>
      </Content>
    </Container>
  );
};

export default MyAnnouncements;
