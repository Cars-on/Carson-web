import React, { ButtonHTMLAttributes } from 'react';
import { FiEdit3 } from 'react-icons/fi';

import { Container } from './styles';

interface IEditButton extends ButtonHTMLAttributes<HTMLElement> {
  onEdit: () => void;
}

const EditButton = ({ onEdit, ...rest }: IEditButton) => {
  function handleEdit() {
    if (onEdit) onEdit();
  }

  return (
    <Container {...rest} onClick={handleEdit}>
      <FiEdit3 />
      Editar
    </Container>
  );
};

export default EditButton;
