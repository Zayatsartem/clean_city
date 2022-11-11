import Credentials from './Credentials';

export default interface RegisterData extends Credentials {
  name: string;
  email: string;
  password: string;
  telephone: string;
}
