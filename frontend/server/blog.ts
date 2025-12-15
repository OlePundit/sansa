'use server';

import { Blog, ApiResponse } from '@/types';

export const getBlogData = async (): Promise<Blog[]> => {
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
      throw new Error(`Failed to fetch blog data: ${response.status} ${response.statusText}`);
    }

    const data: ApiResponse<Blog[]> = await response.json();

    return Array.isArray(data.data) ? data.data : [];

  } catch (error) {
    console.error('[getBlogData] Fetch error:', error);
    return []
  }
};
