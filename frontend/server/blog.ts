'use server';

import { Blog, ApiResponse } from '@/types';

export const getBlogData = async (): Promise<Blog[]> => {
  // Use different base URLs for different environments
  const baseUrl = process.env.APP_URL || 
    (process.env.NODE_ENV === 'production' 
      ? 'https://api.nexl.sansadigital.com' 
      : 'http://127.0.0.1:8000');
  
  const url = `${baseUrl}/api/blogs`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Add auth headers if needed
        ...(process.env.API_KEY && { 
          'Authorization': `Bearer ${process.env.API_KEY}`,
          'X-API-Key': process.env.API_KEY 
        }),
      },
      // Vercel-compatible caching strategy
      cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'default',
      next: { 
        tags: ['blogs'], // For on-demand revalidation
        revalidate: 3600 // ISR: Revalidate every hour
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[getBlogData] API Error ${response.status}:`, errorText);
      return [];
    }

    const data: ApiResponse<Blog[]> = await response.json();
    return Array.isArray(data.data) ? data.data : [];

  } catch (error) {
    console.error('[getBlogData] Fetch error:', error);
    return [];
  }
};

// Optional: Create a version with better error handling
export const getBlogDataWithErrorHandling = async (): Promise<{
  data: Blog[] | null;
  error: string | null;
}> => {
  try {
    const data = await getBlogData();
    return { data, error: null };
  } catch (error) {
    return { 
      data: null, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};