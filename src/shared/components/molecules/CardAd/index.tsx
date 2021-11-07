import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import car_thumb from '@/shared/assets/illustrations/thumbnail.png';
import { api } from '@/shared/providers/api';
import { IAnnouncement, IUser } from '@/shared/dto';

import DeleteAnnounceModal from '../DeleteAnnounceModal';
import DeleteButton from '../../atoms/DeleteButton';
import EditButton from '../../atoms/EditButton';
import { Container } from './styles';

interface CardAdProps {
  announcement: IAnnouncement;
  isDeleteable?: boolean;
  isEditable?: boolean;
}

const CardAd = ({ announcement, isDeleteable, isEditable }: CardAdProps) => {
  const router = useRouter();
  const [adOwner, setAdOwner] = useState<IUser>();

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  function toggleModalVisibility() {
    setShowDeleteModal(!showDeleteModal);
  }

  function handleClickInAnnouncement() {
    router.push(`/ad/${announcement.id}`);
  }

  async function handleDeleteAnnoucemente() {
    await api.delete(`/announcements-users/${announcement?.id}`);

    toggleModalVisibility();
    location.reload();
  }

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
    <>
      {showDeleteModal && (
        <DeleteAnnounceModal
          onCancel={toggleModalVisibility}
          onDelete={handleDeleteAnnoucemente}
        />
      )}

      <Container>
        <img
          src={
            announcement?.photos?.length ? announcement?.photos[0] : car_thumb
          }
          alt=""
          onClick={handleClickInAnnouncement}
        />

        {isEditable && <EditButton onClick={() => console.log('e')} />}
        {isDeleteable && <DeleteButton onDelete={toggleModalVisibility} />}

        <section className="infos">
          <h1
            onClick={handleClickInAnnouncement}
          >{`${announcement?.manufacturer} ${announcement?.brand} ${announcement?.model}`}</h1>
          <span onClick={handleClickInAnnouncement}>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(Number(announcement?.price))}
          </span>

          <section>
            <p>{announcement?.manufacturer_year}</p>
          </section>

          <p>{adOwner?.address}</p>
        </section>
      </Container>
    </>
  );
};

export default CardAd;
