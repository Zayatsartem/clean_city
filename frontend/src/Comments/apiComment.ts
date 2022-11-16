import { Data } from '../types/commentTypes';

export async function feedback(data: Data): Promise<Data> {
  const response = await fetch('/api/comment', {
    method: 'POST',
    body: JSON.stringify({ data }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 404) {
    const { message } = await response.json();
    throw new Error(message);
  }
  const content = await response.json();

  return content;
}

export default {
  feedback,
};
