import React, { ButtonHTMLAttributes } from 'react';
import { FiEdit3 } from 'react-icons/fi';

import { Container } from './styles';

interface IEditButton extends ButtonHTMLAttributes<HTMLElement> {}

const EditButton = ({ ...rest }: IEditButton) => {
  return (
    <Container {...rest}>
      <FiEdit3 />
      Editar
    </Container>
  );
};

export default EditButton;
