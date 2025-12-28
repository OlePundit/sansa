'use server';

import { Service, ApiResponse } from '@/types';

// Use different strategies for dev/production
const isDevelopment = process.env.NODE_ENV === 'development';

export const getServices = async (): Promise<Service[]> => {
  // Use environment variable with fallback for Vercel
  const baseUrl = process.env.APP_URL || 
    (isDevelopment ? 'http://127.0.0.1:8000' : process.env.NEXT_PUBLIC_APP_URL);
  
  if (!baseUrl) {
    console.error('[getServices] No API URL configured');
    return [];
  }

  const url = `${baseUrl}/api/services`;

  try {
    // Configure fetch for Vercel's serverless environment
    const response = await fetch(url, { 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...(process.env.API_KEY && { 
          'X-API-Key': process.env.API_KEY 
        }),
      },
      // Vercel-specific cache settings
      cache: isDevelopment ? 'no-store' : 'default',
      next: { 
        tags: ['services'], // For on-demand revalidation
        revalidate: 3600 // ISR: Revalidate every hour
      },
    });

    if (!response.ok) {
      throw new Error(`API Error ${response.status}: ${response.statusText}`);
    }

    const data: ApiResponse<Service[]> = await response.json();
    return Array.isArray(data.data) ? data.data : [];

  } catch (error) {
    console.error("[getServices] Fetch Error:", error);
    // Return empty array instead of throwing to prevent page crash
    return [];
  }
};