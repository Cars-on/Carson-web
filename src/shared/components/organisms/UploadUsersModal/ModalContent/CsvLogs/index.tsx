/* eslint-disable camelcase */
import React from 'react';
import { CSVLink } from 'react-csv';

import { CsvLogs as ICsvLogs } from '../dto';
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
  logs: ICsvLogs;
}

const CsvLogs = ({ logs }: CsvLogsProps) => {
  const headers = [
    { label: 'address', key: 'address' },
    { label: 'cnpj', key: 'cnpj' },
    { label: 'email', key: 'email' },
    { label: 'name', key: 'name' },
    { label: 'phone', key: 'phone' },
    { label: 'user_name', key: 'user_name' },
  ];

  return (
    <Container>
      <Info>
        <h1>Logs do Csv</h1>
        <span>Linhas com erros: {logs?.length}</span>
      </Info>

      <SectionLogs>
        {logs?.map(log => (
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

      <CSVLink data={logs} headers={headers}>
        <Button type="button">Baixar csv</Button>
      </CSVLink>
    </Container>
  );
};

export default CsvLogs;
