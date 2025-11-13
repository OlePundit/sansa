'use server';

export const getAboutData = async () => {
  const baseUrl = process.env.APP_URL ?? 'http://127.0.0.1:8000';
  const url = `${baseUrl}/api/about`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch about data: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return {
      services: Array.isArray(data.services) ? data.services : [],
      meta: data.meta ?? null,
    };
  } catch (error) {
    console.error('[getAboutData] Fetch error:', error);
    return {
      services: [],
      meta: null,
      error: (error as Error).message,
    };
  }
};
