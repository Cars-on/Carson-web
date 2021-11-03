export interface IAnnouncement {
  id: string;
  user_id: string;
  description: string;
  cnpj: string;
  cpf: string;
  lot: string;
  model: string;
  price: string;
  brand: string;
  brand_year: string;
  manufacturer: string;
  manufacturer_year: string;
  advertiser_code: string;
  photos?: Array<string>;
  created_at?: string;
  updated_at?: string;
}

export interface IUser {
  address: string;
  cnpj: string;
  cpf: string;
  created_at: string;
  email: string;
  first_access: boolean;
  id: string;
  lot: string;
  name: string;
  password: string;
  phone: string;
  role: string;
  updated_at: string;
}
