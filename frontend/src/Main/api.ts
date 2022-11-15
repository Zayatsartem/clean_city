import OrderTelegram, { FreeOrderTelegram } from '../types/OrderTelegram';

/* eslint-disable-next-line import/prefer-default-export */
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

export async function freeRequestTelegram(data: FreeOrderTelegram): Promise<{ message: string }> {
  if (!data.phone.trim() || !data.comment.trim()) {
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
