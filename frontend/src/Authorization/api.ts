export async function user() {
  return (await fetch('/api/user')).json();
}

export async function login(credentials): Promise<> {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status >= 400) {
    const { error } = await response.json();
    throw new Error(error);
  }
  return response.json();
}
