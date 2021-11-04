import React, { ButtonHTMLAttributes } from 'react';
import { FiTrash } from 'react-icons/fi';

import { Container } from './styles';

interface IDeleteButton extends ButtonHTMLAttributes<HTMLElement> {}

const DeleteButton = ({ ...rest }: IDeleteButton) => {
  return (
    <Container {...rest}>
      <FiTrash />
      Deletar
    </Container>
  );
};

export default DeleteButton;
