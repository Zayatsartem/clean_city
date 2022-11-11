import User from '../types/UserTypes';

export default interface RegaState {
  authChecked: boolean;
  user?: User | null;
  registerFormError?: string | null;
}
