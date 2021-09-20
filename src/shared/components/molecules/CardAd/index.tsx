import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import car_thumb from '@/shared/assets/illustrations/thumbnail.png';

import { api } from '@/shared/providers/api';
import { IAnnouncement, IUser } from '@/shared/dto';

import { Container } from './styles';

interface CardAdProps {
  announcement: IAnnouncement;
}

const CardAd = ({ announcement }: CardAdProps) => {
  const [adOwner, setAdOwner] = useState<IUser>();

  useEffect(() => {
    async function getUserInfo() {
      const usersResponse = await api.get('/users');

      const users = usersResponse.data.filter(
        (user: { id: any }) => user.id === announcement?.user_id,
      );

      setAdOwner(users[0]);
    }

    getUserInfo();
  }, [announcement]);

  return (
    <Container>
      <img src={car_thumb} alt="" />

      <section className="infos">
        <h1>{`${announcement?.manufacturer} ${announcement?.brand} ${announcement?.model}`}</h1>
        <span>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(Number(announcement?.price))}
        </span>

        <section>
          <p>{announcement?.manufacturer_year}</p>
        </section>

        <p>{adOwner?.address}</p>
        <Link href={`/ad/${announcement?.id}`}>
          <button type="button">Comprar</button>
        </Link>
      </section>
    </Container>
  );
};

export default CardAd;
