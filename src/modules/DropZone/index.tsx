import React, { ReactNode, useMemo } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";

import { Container } from "./styles";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  width: "44rem",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export default function Basic(props: any) {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone();

  const style: React.CSSProperties = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const fileList = (files: FileWithPath[]): ReactNode =>
    files.map((file) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));

  return (
    <Container>
      <section className="container">
        <div className="drag-and-drop">
          <div className="section-title">
            <h1>CSV de usuários</h1>
            <p>Faça upload aqui.</p>
          </div>
          <div {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <p>
              Arraste e solte ou <strong>clique aqui</strong> e procure nos seus
              arquivos
            </p>
          </div>
          <aside>
            <h4>Files</h4>
            <ul>{fileList(acceptedFiles)}</ul>
          </aside>
        </div>
      </section>
    </Container>
  );
}
