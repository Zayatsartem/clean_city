/* eslint-disable import/prefer-default-export */
import OrderTelegram from '../types/OrderTelegram';

export async function requestTelegram(data: OrderTelegram): Promise<{ message: string }> {
  if (!data.phone.trim() || !data.rooms.trim() || !data.bathrooms.trim()) {
    const errData = { message: 'Пожалуйста заполните все поля' };
    return errData;
  }
  const res = await fetch('/api/main/request', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
}