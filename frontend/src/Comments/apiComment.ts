import { Data } from './commentTypes';

export async function feedback(data: Data): Promise<Data> {
  console.log(data);
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
  console.log(content);

  return content;
}

export default {
  feedback,
};
