import User from './UserTypes';

export default interface Order {
  user_id: number | undefined;
  rooms: number;
  bathrooms: number;
  date: string;
  time: string;
  address: string;
  status: string;
}
export interface IFormInput {
  user_id: number | undefined;
  rooms: number;
  bathrooms: number;
  date: string;
  time: string;
  address: string;
  status: string;
  checkbox: [];
}

export interface OrderState {
  order: Order | null;
  user?: User | null;
  orderFormError?: string | null;
}
