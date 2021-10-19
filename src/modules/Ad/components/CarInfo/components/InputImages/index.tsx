import React from 'react';
import { useRouter } from 'next/router';
import { api } from '@/shared/providers/api';

import {
  Container,
  InputImages as InputImagesStyled,
  LabelImages,
} from './styles';

const InputImages: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const sendImagesResquestd = async (formData: any) => {
    try {
      const response = await api.patch(`announcements/${id}`, formData, {
        headers: { 'content-type': 'multipart/form-data' },
      });

      return response.status;
    } catch (error: any) {
      return error.response;
    }
  };

  const handleSendImages = async (photos: any) => {
    const formData = new FormData();

    for (var i = 0; i < photos.length; i++) {
      formData.append('photos', photos[i], photos[i].name);
    }

    const imageResponse = await sendImagesResquestd(formData);

    if (imageResponse === 200) location.reload();
  };

  return (
    <Container>
      <InputImagesStyled
        id="inputImages"
        type="file"
        accept="image/*"
        multiple
        onChange={e => {
          const fileImages = e.target.files;

          handleSendImages(fileImages);
        }}
      />

      <LabelImages htmlFor="inputImages">Enviar imagens</LabelImages>
    </Container>
  );
};

export default InputImages;
