export interface IAnnouncement {
  advertiser_code: string;
  brand: string;
  brand_year: string;
  cnpj: string;
  cpf: string;
  created_at: string;
  description: string;
  id: string;
  user_id: string;
  lot: string;
  manufacturer: string;
  manufacturer_year: string;
  photos: Array<string>;
  model: string;
  price: string;
  updated_at: string;
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
