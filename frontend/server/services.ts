// server/services.ts
'use server';

import { Service, ApiResponse } from '@/types';

export const getServices = async (): Promise<Service[]> => {
  console.log('[getServices] NODE_ENV:', process.env.NODE_ENV);
  console.log('[getServices] APP_URL:', process.env.APP_URL);
  
  const baseUrl = process.env.APP_URL ?? 'http://127.0.0.1:8000';
  const url = `${baseUrl}/api/services`;
  
  console.log('[getServices] Fetching from:', url);

  try {
    console.time('[getServices] Fetch duration');
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });
    console.timeEnd('[getServices] Fetch duration');

    console.log('[getServices] Response status:', response.status);

    if (!response.ok) {
      console.error('[getServices] Response not OK:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('[getServices] Error body:', errorText);
      throw new Error(`Failed to fetch services data: ${response.status} ${response.statusText}`);
    }

    // Parse the response
    const data = await response.json();
    console.log('[getServices] Data received, keys:', Object.keys(data));

    // Handle different response structures
    // Case 1: Direct array
    if (Array.isArray(data)) {
      console.log(`[getServices] Got direct array with ${data.length} items`);
      return data;
    }
    
    // Case 2: Object with 'data' property that's an array
    if (data && data.data && Array.isArray(data.data)) {
      console.log(`[getServices] Got data.data array with ${data.data.length} items`);
      return data.data;
    }
    
    // Case 3: Object with 'services' property
    if (data && data.services && Array.isArray(data.services)) {
      console.log(`[getServices] Got data.services array with ${data.services.length} items`);
      return data.services;
    }
    
    // Case 4: Laravel paginated response
    if (data && data.data && data.meta) {
      console.log(`[getServices] Got paginated data with ${data.data.length} items`);
      return data.data;
    }
    
    // Case 5: Check for any array in response
    const arrayKeys = Object.keys(data).filter(key => Array.isArray(data[key]));
    if (arrayKeys.length > 0) {
      console.log(`[getServices] Found array keys:`, arrayKeys);
      const firstArrayKey = arrayKeys[0];
      console.log(`[getServices] Returning ${data[firstArrayKey].length} items from key '${firstArrayKey}'`);
      return data[firstArrayKey];
    }

    console.error('[getServices] Unrecognized response structure:', data);
    return [];

  } catch (error) {
    console.error('[getServices] Fetch error details:', error);
    
    // Log specific connection errors
    if (error instanceof Error && error.message.includes('ECONNREFUSED')) {
      console.error('[getServices] Laravel server is not running or not accessible');
    }
    
    return [];
  }
};

// Test function to verify API endpoint
export const testServicesEndpoint = async () => {
  const baseUrl = process.env.APP_URL ?? 'http://127.0.0.1:8000';
  const url = `${baseUrl}/api/services`;
  
  try {
    const response = await fetch(url, { cache: 'no-store' });
    const text = await response.text();
    
    return {
      url,
      status: response.status,
      statusText: response.statusText,
      contentType: response.headers.get('content-type'),
      bodyPreview: text.substring(0, 200),
      bodyLength: text.length
    };
  } catch (error) {
    return {
      url,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// Optional: Get single service by slug
export const getServiceBySlug = async (slug: string): Promise<Service | null> => {
  const baseUrl = process.env.APP_URL ?? 'http://127.0.0.1:8000';
  const url = `${baseUrl}/api/services/${slug}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    
    // Handle different response structures
    if (data && data.data) {
      return data.data;
    }
    
    if (data && data.service) {
      return data.service;
    }
    
    return data;

  } catch (error) {
    console.error('[getServiceBySlug] Fetch error:', error);
    return null;
  }
};