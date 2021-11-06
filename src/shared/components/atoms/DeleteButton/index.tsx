import React, { ButtonHTMLAttributes, useState } from 'react';
import { FiTrash } from 'react-icons/fi';

import { Button } from './styles';

interface IDeleteButton extends ButtonHTMLAttributes<HTMLElement> {
  onDelete: () => void;
}

const DeleteButton = ({ onDelete, ...rest }: IDeleteButton) => {
  function handleDelete() {
    if (onDelete) onDelete();
  }

  return (
    <>
      <Button {...rest} onClick={handleDelete}>
        <FiTrash />
        Deletar
      </Button>
    </>
  );
};

export default DeleteButton;
