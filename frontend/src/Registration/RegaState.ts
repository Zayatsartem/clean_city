import User from '../types/UserTypes';

export default interface RegaState {
  authChecked: boolean;
  user?: User;
  registerFormError?: string;
}
