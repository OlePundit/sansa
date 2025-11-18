'use server';

export const getBlogData = async () => {
  const baseUrl = process.env.APP_URL ?? 'http://127.0.0.1:8000';
  const url = `${baseUrl}/api/blogs`;

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
      blogs: Array.isArray(data.blogs) ? data.blogs : [],
      services: Array.isArray(data.services) ? data.services : [],
      meta: data.meta ?? null,
    };
  } catch (error) {
    console.error('[getAboutData] Fetch error:', error);
    return {
      blogs: [],
    services: [],
      meta: null,
      error: (error as Error).message,
    };
  }
};
