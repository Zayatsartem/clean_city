import User from './UserTypes';

export default interface EditData {
  id: number | undefined,
  name: string | undefined,
  email: string | undefined,
  telephone: string | undefined,
}
export interface EditState {
  user: User,
  editFormError: string | null,
}
