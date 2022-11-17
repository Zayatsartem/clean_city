import Order from '../types/OrderTypes';

// eslint-disable-next-line import/prefer-default-export
export async function orderData(data: Order): Promise<Order> {
  const res = await fetch('/api/order', {
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
  return data1;
}
