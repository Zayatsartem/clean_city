import RegisterData from './RegisterData';
import User from '../types/UserTypes';

export async function user(): Promise<
  | {
      isLoggedIn: true;
      user: User;
    }
  | {
      isLoggedIn: false;
    }
> {
  return (await fetch('/api/user')).json();
}

export async function register(data: RegisterData): Promise<User> {
  const res = await fetch('/api/register', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }

  const data1 = await res.json();
  return data1.user;
}
