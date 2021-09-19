/* eslint-disable camelcase */
export interface CsvLogProps {
  advertiser_code: string;
  brand: string;
  brand_year: string;
  cnpj: string;
  cpf: string;
  created_at: string;
  description: string;
  error: Array<string> | string;
  line: number;
  lot: string;
  manufacturer: string;
  manufacturer_year: string;
  model: string;
  price: string;
  updated_at: string;
  user_name: string;
  _id: string;
}

export type CsvLogs = Array<CsvLogProps> | null;
