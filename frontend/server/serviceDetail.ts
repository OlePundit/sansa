'use server';

import { Service, ApiResponse } from '@/types';

// Get all Services
export const getServiceData = async (): Promise<Service[]> => {
  const baseUrl = process.env.APP_URL ?? 'http://127.0.0.1:8000';
  const url = `${baseUrl}/api/services`;

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
      console.error(`[getServiceData] API Error ${response.status}: ${await response.text()}`);
      return [];
    }

    const data: ApiResponse<Service[]> = await response.json();
    return Array.isArray(data.data) ? data.data : [];

  } catch (error) {
    console.error('[getServiceData] Fetch error:', error);
    return [];
  }
};

// Get single service by slug
export const getService = async (slug: string): Promise<Service | null> => {
  const baseUrl = process.env.APP_URL ?? 'http://127.0.0.1:8000';
  const url = `${baseUrl}/api/services/${slug}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

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
        console.warn(`[getService] Service not found: ${slug}`);
        return null;
      }
      throw new Error(`Failed to fetch Service: ${response.status}`);
    }

    const data: ApiResponse<Service> = await response.json();
    return data.data || null;

  } catch (error) {
    console.error('[getService] Fetch error:', error);
    return null;
  }
};

// Get related services (optional)
export const getRelatedServices = async (currentSlug: string, category?: string): Promise<Service[]> => {
  const baseUrl = process.env.APP_URL ?? 'http://127.0.0.1:8000';
  const url = `${baseUrl}/api/services/related/${currentSlug}${category ? `?category=${category}` : ''}`;

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

    const data: ApiResponse<Service[]> = await response.json();
    return Array.isArray(data.data) ? data.data : [];

  } catch (error) {
    console.error('[getRelatedServices] Error:', error);
    return [];
  }
};