import React, { ReactNode, useMemo, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';

import Button from '@/shared/components/atoms/TopBarButton';

import {
  acceptStyle,
  activeStyle,
  baseStyle,
  Container,
  rejectStyle,
} from '../styles';
import useUploadUsersModal from '@/shared/hooks/useUploadUsersModal';

export default function RegisterUsers() {
  const { onDrop } = useUploadUsersModal();

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop });

  const style: any = useMemo(
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
        <div className="content">
          <div className="drag-and-drop">
            <div className="section-title">
              <h1>CSV de usuários</h1>
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
