import User from '../types/UserTypes';
import { Credentials } from '../types/AuthTypes';

export async function user(): Promise<
  | {
    exist: true;
    user: User;
  }
  | {
    exist: false;
  }
> {
  return (await fetch('/api/logout/user')).json();
}

export async function login(credentials: Credentials): Promise<User> {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  if (response.status >= 400) {
    const { message } = await response.json();
    throw new Error(message);
  }
  const data = await response.json();
  return data.user;
}

export async function logout(): Promise<void> {
  const response = await fetch('/api/logout');

  // if (response.status === 304) {
  //   throw new Error();

  // }
  return response.json();
}
