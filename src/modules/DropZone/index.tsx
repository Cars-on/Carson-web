import React, { ReactNode, useMemo, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';

import Topbar from '@/shared/components/molecules/Topbar';
import Button from '@/shared/components/atoms/Button';

import { api } from '@/shared/providers/api';

import { Container } from './styles';
import useUploadUsersModal from '@/shared/hooks/useUploadUsersModal';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  border: '1px dashed #A4B3B5',
  borderWidth: 2,
  borderRadius: '1rem',
  borderColor: '#eeeeee',
  backgroundColor: 'rgba(56, 188, 172, 0.05)',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  width: '40rem',
  minHeight: '12rem',
  cursor: 'pointer',
};

const activeStyle = {
  borderColor: '#A4B3B5;',
};

const acceptStyle = {
  borderColor: '#38bcac',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

export default function Basic() {
  const { onDrop } = useUploadUsersModal();

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop });

  const style: React.CSSProperties = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept],
  );

  const fileList = (files: FileWithPath[]): ReactNode =>
    files.map(file => <li key={file.path}>{file.path}</li>);

  return (
    <>
      <Container>
        <Topbar />
        <div className="content">
          <div className="drag-and-drop">
            <div className="section-title">
              <h1>CSV de usuários</h1>
              <p>Faça upload aqui.</p>
            </div>
            <div {...getRootProps({ style })}>
              <input
                {...getInputProps()}
                onSubmit={e => console.log(e, '##')}
                onChange={e => console.log(e, '##')}
              />
              <p>
                Arraste e solte ou <strong>clique aqui</strong> e procure nos
                seus arquivos
              </p>
            </div>
            <aside>
              <Button primary>Enviar</Button>
            </aside>
          </div>
          <div className="drag-and-drop">
            <div className="section-title">
              <h1>CSV de anúncios</h1>
              <p>Faça upload aqui.</p>
            </div>
            <div {...getRootProps({ style })}>
              <input {...getInputProps()} />
              <p>
                Arraste e solte ou <strong>clique aqui</strong> e procure nos
                seus arquivos
              </p>
            </div>
            <aside>
              <Button primary>Enviar</Button>
            </aside>
            <div className="files-ready">
              <h4>Arquivos Prontos:</h4>
              <ul>{fileList(acceptedFiles)}</ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
