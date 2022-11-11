import User from '../types/UserTypes';
import { Credentials } from './types';

export async function user(): Promise<
| {
  exist: true;
  user: User;
}
| {
  exist: false;
}> {
  return (await fetch('/api/user')).json();
}
export async function login(credentials: Credentials): Promise<User> {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials)
  });
  if (response.status >= 400) {
    const { message } = await response.json();
    throw new Error(message);
  }
  return response.json();
}

export async function logout(): Promise<void> {
  const response = await fetch('/api/logout');
  console.log('fetch');
  // const { error } = await response.json();
  // if (response.status !== 200) {
  //   throw new Error(error);
  // }
  return response.json();
}
