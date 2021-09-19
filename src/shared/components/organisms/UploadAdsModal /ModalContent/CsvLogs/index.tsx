/* eslint-disable camelcase */
import React from 'react';
import { CSVLink } from 'react-csv';

import { CsvLogProps } from '../dto';
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
    { label: 'Nome do fabricante', key: 'manufacturer' },
    { label: 'descrição marca do veículo', key: 'brand' },
    { label: 'descrição modelo do veículo', key: 'model' },
    { label: 'cod do anunciante', key: 'advertiser_code' },
    { label: 'ano de fabricação', key: 'manufacturer_year' },
    { label: 'ano do modelo', key: 'brand_year' },
    { label: 'cpf do anunciante', key: 'cpf' },
    { label: 'cnpj do anunciante', key: 'cnpj' },
    { label: 'valor do veiculo', key: 'price' },
    { label: 'descrição', key: 'description' },
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

              {typeof log.error === 'string' ? (
                <ErrorLogDescription>{log.error}</ErrorLogDescription>
              ) : (
                log.error.length > 0 &&
                log.error?.map(error => (
                  <ErrorLogDescription>{error}</ErrorLogDescription>
                ))
              )}
            </SingleLog>
          </>
        ))}
      </SectionLogs>

      <CSVLink data={logs} headers={headers} filename={'anuncios-logs.csv'}>
        <Button type="button">Baixar csv</Button>
      </CSVLink>
    </Container>
  );
};

export default CsvLogs;
