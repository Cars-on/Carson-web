import React, { useEffect } from 'react';
import { FiX } from 'react-icons/fi';

import { Container, Modal, ModalOptions } from './styles';

interface IDeleteAnnounceModalProps {
  onCancel: () => void;
  onDelete: () => void;
}

const DeleteAnnounceModal = ({
  onCancel,
  onDelete,
}: IDeleteAnnounceModalProps) => {
  function handleCancel() {
    if (onCancel) onCancel();
  }
  function handleDelete() {
    if (onDelete) onDelete();
  }

  useEffect(() => {
    const body = document.querySelector('body');

    if (body) body.style.overflowX = 'hidden';

    return () => {
      if (body) body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <Container>
      <Modal>
        <FiX className="delete-icon" onClick={handleCancel} />
        <h1>Você tem certeza ?</h1>
        <p>
          Você realmente quer deleter esse anúncio ? esse processo não poderá
          ser desfeito
        </p>

        <ModalOptions>
          <button className="cancel" onClick={handleCancel}>
            Cancelar
          </button>
          <button className="delete" onClick={handleDelete}>
            Sim, deletar
          </button>
        </ModalOptions>
      </Modal>
    </Container>
  );
};

export default DeleteAnnounceModal;
