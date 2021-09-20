import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { Container } from './styles';
import { api } from '@/shared/providers/api';

interface IAnnouncement {
  advertiser_code: string;
  brand: string;
  brand_year: string;
  cnpj: string;
  cpf: string;
  created_at: string;
  description: string;
  id: string;
  user_id: string;
  lot: string;
  manufacturer: string;
  manufacturer_year: string;
  model: string;
  price: string;
  updated_at: string;
}

interface IUser {
  address: string;
  cnpj: string;
  cpf: string;
  created_at: string;
  email: string;
  first_access: boolean;
  id: string;
  lot: string;
  name: string;
  password: string;
  phone: string;
  role: string;
  updated_at: string;
}

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
      <img
        src="https://www.planetcarsz.com/assets/uploads/4e1cbf5036d32297aad4e320218788e3.jpg"
        alt=""
      />

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
