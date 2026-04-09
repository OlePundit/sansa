'use server';

import { Blog, ApiResponse } from '@/types';

// Get all blogs
export const getBlogData = async (): Promise<Blog[]> => {
  const baseUrl = process.env.APP_URL ?? 'http://127.0.0.1:8000';
  const url = `${baseUrl}/api/blogs`;

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
      console.error(`[getBlogData] API Error ${response.status}: ${await response.text()}`);
      return [];
    }

    const data: ApiResponse<Blog[]> = await response.json();
    return Array.isArray(data.data) ? data.data : [];

  } catch (error) {
    console.error('[getBlogData] Fetch error:', error);
    return [];
  }
};

// Get single blog by slug
export const getBlog = async (slug: string): Promise<Blog | null> => {
  const baseUrl = process.env.APP_URL ?? 'http://127.0.0.1:8000';
  const url = `${baseUrl}/api/blogs/${slug}`;

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
        console.warn(`[getBlog] Blog not found: ${slug}`);
        return null;
      }
      throw new Error(`Failed to fetch blog: ${response.status}`);
    }

    const data: ApiResponse<Blog> = await response.json();
    return data.data || null;

  } catch (error) {
    console.error('[getBlog] Fetch error:', error);
    return null;
  }
};

// Get related blogs (optional)
export const getRelatedBlogs = async (currentSlug: string, category?: string): Promise<Blog[]> => {
  const baseUrl = process.env.APP_URL ?? 'http://127.0.0.1:8000';
  const url = `${baseUrl}/api/blogs/related/${currentSlug}${category ? `?category=${category}` : ''}`;

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

    const data: ApiResponse<Blog[]> = await response.json();
    return Array.isArray(data.data) ? data.data : [];

  } catch (error) {
    console.error('[getRelatedBlogs] Error:', error);
    return [];
  }
};