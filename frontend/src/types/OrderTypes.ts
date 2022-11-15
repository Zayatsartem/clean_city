export default interface Order {
  user_id: number | undefined;
  rooms: number;
  bathrooms: number;
  date: string;
  time: string;
  address: string;
  status: string;
}
