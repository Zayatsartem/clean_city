import User from '../types/UserTypes';

export default interface EditData {
  name: string,
  email: string,
  telephone: string
}
export interface EditState {
  user: User,
  editFormError: string | null,
}
