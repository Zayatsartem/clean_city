export type TComment = {
  id: number,
  date: string,
  name: string,
  title: string,
};
export type TNewOrder = {
  id: number,
  rooms: number,
  bathrooms: number,
  date: string,
  time: string,
  address: string,
  name: string,
  email: string,
  telephone: string
};
export type AdminState = {
  newOrders: TNewOrder[],
  WIPOrders: TNewOrder[],
  comments: TComment[],
  error: string | null,
};
