/* eslint-disable camelcase */
export interface CsvLogProps {
  address: string;
  cnpj: string;
  cpf: string;
  created_at: string;
  email: string;
  error: Array<string>;
  line: number;
  lot: string;
  name: string;
  phone: string;
  updated_at: string;
  user_name: string;
  _id: string;
}

export type CsvLogs = Array<CsvLogProps> | null;
