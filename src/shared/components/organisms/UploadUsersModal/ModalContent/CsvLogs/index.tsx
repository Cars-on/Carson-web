/* eslint-disable camelcase */
import React from 'react';
import { CSVLink } from 'react-csv';

import { CsvLogProps, CsvLogs as ICsvLogs } from '../dto';
import { Button } from '../styles';

import {
  Container,
  ErrorLogDescription,
  ErrorLogTitle,
  SingleLog,
  SectionLogs,
  Info,
} from './styles';

interface CsvLogsProps {
  logs: any;
}

const CsvLogs = ({ logs }: CsvLogsProps) => {
  const headers = [
    { label: 'cnpj', key: 'cnpj' },
    { label: 'cpf', key: 'cpf' },
    { label: 'nome', key: 'name' },
    { label: 'apelido', key: 'user_name' },
    { label: 'email', key: 'email' },
    { label: 'telefone', key: 'phone' },
    { label: 'endereço', key: 'address' },
    { label: 'erros', key: 'error' },
  ];

  return (
    <Container>
      <Info>
        <h1>Logs do Csv</h1>
        <span>Linhas com erros: {logs?.length}</span>
      </Info>

      <SectionLogs>
        {logs?.map((log: CsvLogProps) => (
          <>
            <SingleLog>
              <ErrorLogTitle>Linha: {log.line}</ErrorLogTitle>

              {log.error.length > 0 &&
                log.error?.map(error => (
                  <ErrorLogDescription>{error}</ErrorLogDescription>
                ))}
            </SingleLog>
          </>
        ))}
      </SectionLogs>

      <CSVLink data={logs} headers={headers} filename={'usuarios-logs.csv'}>
        <Button type="button">Baixar csv</Button>
      </CSVLink>
    </Container>
  );
};

export default CsvLogs;
