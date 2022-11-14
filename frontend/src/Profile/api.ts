import User from '../types/UserTypes';
import EditData from './profileTypes';

export async function editProfile(data: EditData): Promise<User> {
  const response = await fetch('/api/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  if (response.status === 500) {
    const { message } = await response.json();
    throw new Error(message);
  }
  const content = await response.json();
  return content;
}

export default {
  editProfile
};
