export interface Data {
  stars: number | null,
  title: string | null,
  orderId: number | null,
  commentError: string | null | undefined,
  status: boolean,
}

export interface Comment {
  id: number,
  user_id: number | undefined;
  rooms: number;
  bathrooms: number;
  date: string;
  time: string;
  address: string;
  status: string;
}
