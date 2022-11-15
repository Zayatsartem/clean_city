export default interface Credentials {
  name: string;
  password: string;
}
export interface RegisterData extends Credentials {
  name: string;
  email: string;
  password: string;
  telephone: string;
}
export interface IFormInput {
  name: string;
  email: string;
  password: string;
  telephone: string;
}
