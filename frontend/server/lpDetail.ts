'use server';

import { LP, ApiResponse } from '@/types';

// Get all LPs
export const getLPData = async (): Promise<LP[]> => {
  const baseUrl = process.env.APP_URL ?? 'http://127.0.0.1:8000';
  const url = `${baseUrl}/api/lps`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...(process.env.API_KEY && {
          'X-API-Key': process.env.API_KEY
        }),
      },
      cache: 'no-store',
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`[getLPData] API Error ${response.status}: ${await response.text()}`);
      return [];
    }

    const data: ApiResponse<LP[]> = await response.json();
    return Array.isArray(data.data) ? data.data : [];

  } catch (error) {
    console.error('[getLPData] Fetch error:', error);
    return [];
  }
};

// Get single lp by slug
export const getLP = async (slug: string): Promise<LP | null> => {
  const baseUrl = process.env.APP_URL ?? 'http://127.0.0.1:8000';
  const url = `${baseUrl}/api/lps/${slug}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...(process.env.API_KEY && {
          'X-API-Key': process.env.API_KEY
        }),
      },
      cache: 'no-store',
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      if (response.status === 404) {
        console.warn(`[getLP] LP not found: ${slug}`);
        return null;
      }
      throw new Error(`Failed to fetch LP: ${response.status}`);
    }

    const data: ApiResponse<LP> = await response.json();
    return data.data || null;

  } catch (error) {
    console.error('[getLP] Fetch error:', error);
    return null;
  }
};

// Get related lps (optional)
export const getRelatedLPs = async (currentSlug: string, category?: string): Promise<LP[]> => {
  const baseUrl = process.env.APP_URL ?? 'http://127.0.0.1:8000';
  const url = `${baseUrl}/api/lps/related/${currentSlug}${category ? `?category=${category}` : ''}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      return [];
    }

    const data: ApiResponse<LP[]> = await response.json();
    return Array.isArray(data.data) ? data.data : [];

  } catch (error) {
    console.error('[getRelatedLPs] Error:', error);
    return [];
  }
};
