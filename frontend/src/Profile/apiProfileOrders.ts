import { Comment } from '../types/commentTypes';
import User from '../types/UserTypes';
import EditData from '../types/profileTypes';

export async function editProfile(data: EditData): Promise<User> {
  const response = await fetch('/api/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (response.status === 500) {
    const { message } = await response.json();
    throw new Error(message);
  }
  const content = await response.json();
  return content;
}

export async function getOrders(): Promise<Comment[]> {
  const response = await fetch('/api/profile/orders');

  const data = await response.json();

  return data.orders;
}

export default {
  editProfile,
  getOrders,
};
