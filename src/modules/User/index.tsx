import React, { useContext, useState } from 'react';
import moment from 'moment';

import { Context } from '@/shared/providers/contexts/AuthContext/AuthContext';

import { Container, Content } from './styles';
import DeleteModal from './components/DeleteModal';
import { api } from '@/shared/providers/api';
import router from 'next/router';

const User = () => {
  const { loggedUser, handleLogout } = useContext(Context);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  async function handleDelete() {
    try {
      await api.delete(`/users/${loggedUser?.id}`);
      handleLogout();
    } catch (error) {}
  }

  return (
    <>
      {showDeleteModal && (
        <DeleteModal
          onCancel={() => setShowDeleteModal(false)}
          onDelete={handleDelete}
        />
      )}

      <Container>
        <Content>
          <h1>Bem vindo ao seu perfil</h1>

          <div className="info">
            <h3>Nome: {loggedUser?.name}</h3>
            <h3>UserName: {loggedUser?.user_name}</h3>
            <h3>
              Tempo na plataforma: {moment(loggedUser?.create_at).fromNow()}
            </h3>
            <h3>Email: {loggedUser?.email}</h3>
            <h3>Cidade: {loggedUser?.address}</h3>
            <h3>Estado: {loggedUser?.state}</h3>
          </div>

          <button onClick={() => setShowDeleteModal(true)} className="update">
            Atualizar
          </button>
          <button onClick={() => setShowDeleteModal(true)}>
            Deletar minha conta
          </button>
        </Content>
      </Container>
    </>
  );
};

export default User;
