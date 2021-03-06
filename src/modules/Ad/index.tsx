import React, { useEffect, useState } from 'react';

import Contact from './components/Contact';
import CarInfo from './components/CarInfo';
import Related from './components/Related';

import { api } from '@/shared/providers/api';
import { IAnnouncement } from '@/shared/dto';

import { Container } from './styles';

interface IAd {
  id: number | string;
}

const Ad = ({ id }: IAd) => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);

  useEffect(() => {
    async function getAdData() {
      try {
        const usersResponse = await api.get('/users');
        const response = await api.get(`/announcements/${id}`);
        setAdData(response.data);

        const users = usersResponse.data.filter(
          (user: { id: any }) => user.id === response.data.user_id,
        );

        setAdOwner(users[0]);
      } catch (error: any) {
        console.log(error?.response);
      }
    }

    getAdData();
  }, [id]);

  useEffect(() => {
    async function getAnnouncement() {
      try {
        const response = await api.get('/announcements');

        setAnnouncements(response.data?.announcements);
      } catch (error: any) {
        console.log(error?.response);
      }
    }

    getAnnouncement();
  }, []);

  const [adData, setAdData] = useState(Object);
  const [adOwner, setAdOwner] = useState(Object);

  return (
    <Container>
      <div className="content">
        <div className="ad-info">
          <CarInfo
            userId={adOwner?.id}
            localization={adOwner?.address}
            photos={adData?.photos?.slice(0, 3)}
            specifications={adData}
          />
          <Contact
            name={adOwner?.name}
            phone={adOwner?.phone}
            email={adOwner.email}
          />
        </div>

        <Related id_announcement={id} announcements={announcements} />
      </div>
    </Container>
  );
};

export default Ad;
