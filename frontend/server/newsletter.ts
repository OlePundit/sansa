export const subscribeNewsletter = async (email: string): Promise<{ ok: boolean; message: string }> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000';
  const url = `${baseUrl}/api/newsletter`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { ok: false, message: data?.message ?? 'Something went wrong' };
    }

    return { ok: true, message: data?.message ?? 'Subscribed successfully' };
  } catch {
    return { ok: false, message: 'Network error. Please try again.' };
  }
};
