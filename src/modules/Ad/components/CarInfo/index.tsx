import React, { useState, useEffect, HTMLAttributes } from 'react';
import { useRouter } from 'next/router';

import { api } from '@/shared/providers/api';
import car_thumb from '@/shared/assets/illustrations/thumbnail.png';
import DeleteAnnounceModal from '@/shared/components/molecules/DeleteAnnounceModal';

import CarSpecs from './components/CarSpecs';
import EditButton from './components/EditButton';
import DeleteButton from './components/DeleteButton';
import InputImages from './components/InputImages';
import UpdateFields from './components/UpdateFields';
import { Container, OwnerOptions } from './styles';

interface ICarSpecifications {
  id: string;
  brand: string;
  price: number;
  manufacturer_year: string;
  manufacturer: string;
  description: string;
  viewed: string;
  created_at: string;
}

interface ICarInfoProps extends HTMLAttributes<HTMLElement> {
  photos: Array<string>;
  userId: string;
  localization: string;
  specifications: ICarSpecifications;
}

const CarInfo = ({
  photos,
  userId,
  specifications,
  localization,
}: ICarInfoProps) => {
  const router = useRouter();

  const [mainPhoto, setMainPhoto] = useState(car_thumb);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateFields, setShowUpdateFields] = useState(false);

  const localStorageUser =
    typeof window !== 'undefined' ? localStorage?.getItem('@crs:user') : null;
  const isUserLogged = JSON.parse(localStorageUser);
  const userIdLocalStorage = isUserLogged?.id;

  const ownerIsLogged = userId === userIdLocalStorage;

  function toggleUpdateFields() {
    setShowUpdateFields(!showUpdateFields);
  }

  function toggleDeleteModalVisibility() {
    setShowDeleteModal(!showDeleteModal);
  }

  async function handleDeleteAnnoucemente() {
    await api.delete(`/announcements-users/${specifications?.id}`);

    toggleDeleteModalVisibility();
    router.push('/announcements');
  }

  useEffect(() => {
    if (photos?.length) {
      setMainPhoto(photos[0]);
      return;
    }
    setMainPhoto(car_thumb);
  }, photos);

  return (
    <>
      {showDeleteModal && (
        <DeleteAnnounceModal
          onCancel={toggleDeleteModalVisibility}
          onDelete={handleDeleteAnnoucemente}
        />
      )}

      <Container>
        <div className="images">
          <div className="main-image">
            <img src={mainPhoto} alt="" />
          </div>
          <div className="abc-images">
            {photos?.map(photo => (
              <img
                src={photo}
                onClick={() => {
                  setMainPhoto(photo);
                }}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="details">
          {showUpdateFields ? (
            <UpdateFields
              specifications={specifications}
              localization={localization}
              onCancel={toggleUpdateFields}
            />
          ) : (
            <>
              <CarSpecs
                specifications={specifications}
                ownerIsLogged={ownerIsLogged}
                localization={localization}
              />

              {ownerIsLogged && (
                <OwnerOptions>
                  <InputImages />
                  <EditButton onEdit={toggleUpdateFields} />
                  <DeleteButton onDelete={toggleDeleteModalVisibility} />
                </OwnerOptions>
              )}
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default CarInfo;
