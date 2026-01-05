'use server';

import { Blog, ApiResponse } from '@/types';

export const getBlogData = async (): Promise<Blog[]> => {
  console.log('[getBlogData] NODE_ENV:', process.env.NODE_ENV);
  console.log('[getBlogData] APP_URL:', process.env.APP_URL);
  
  const baseUrl = process.env.APP_URL ?? 'http://127.0.0.1:8000';
  const url = `${baseUrl}/api/blogs`;
  
  console.log('[getBlogData] Fetching from:', url);

  try {
    console.time('[getBlogData] Fetch duration');
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });
    console.timeEnd('[getBlogData] Fetch duration');

    console.log('[getBlogData] Response status:', response.status);
    console.log('[getBlogData] Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      console.error('[getBlogData] Response not OK:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('[getBlogData] Error body:', errorText);
      throw new Error(`Failed to fetch blog data: ${response.status} ${response.statusText}`);
    }

    // Get the raw response text first to see what's actually coming back
    const rawResponse = await response.text();
    console.log('[getBlogData] Raw response (first 500 chars):', rawResponse.substring(0, 500));
    
    let data;
    try {
      data = JSON.parse(rawResponse);
      console.log('[getBlogData] Parsed JSON data structure:', Object.keys(data));
    } catch (parseError) {
      console.error('[getBlogData] Failed to parse JSON:', parseError);
      console.error('[getBlogData] Full raw response:', rawResponse);
      return [];
    }

    // Handle different response structures
    console.log('[getBlogData] Checking response structure...');
    
    // Case 1: Direct array
    if (Array.isArray(data)) {
      console.log(`[getBlogData] Got direct array with ${data.length} items`);
      return data;
    }
    
    // Case 2: Object with 'data' property that's an array
    if (data && data.data && Array.isArray(data.data)) {
      console.log(`[getBlogData] Got data.data array with ${data.data.length} items`);
      return data.data;
    }
    
    // Case 3: Object with 'blogs' property
    if (data && data.blogs && Array.isArray(data.blogs)) {
      console.log(`[getBlogData] Got data.blogs array with ${data.blogs.length} items`);
      return data.blogs;
    }
    
    // Case 4: Laravel paginated response
    if (data && data.data && data.meta) {
      console.log(`[getBlogData] Got paginated data with ${data.data.length} items`);
      return data.data;
    }
    
    // Case 5: Check for other common structures
    const arrayKeys = Object.keys(data).filter(key => Array.isArray(data[key]));
    if (arrayKeys.length > 0) {
      console.log(`[getBlogData] Found array keys:`, arrayKeys);
      // Return the first array we find
      const firstArrayKey = arrayKeys[0];
      console.log(`[getBlogData] Returning ${data[firstArrayKey].length} items from key '${firstArrayKey}'`);
      return data[firstArrayKey];
    }

    console.error('[getBlogData] Unrecognized response structure:', data);
    return [];

  } catch (error) {
    console.error('[getBlogData] Fetch error details:', error);
    
    // Check if it's a connection error
    if (error instanceof Error) {
      if (error.message.includes('ECONNREFUSED')) {
        console.error('[getBlogData] Laravel server is not running or not accessible');
        console.error('[getBlogData] Please start Laravel: php artisan serve');
      }
      console.error('[getBlogData] Error message:', error.message);
      console.error('[getBlogData] Error stack:', error.stack);
    }
    
    return []
  }
};

// Test function to verify API endpoint
export const testApiEndpoint = async () => {
  const baseUrl = process.env.APP_URL ?? 'http://127.0.0.1:8000';
  const url = `${baseUrl}/api/blogs`;
  
  console.log('[testApiEndpoint] Testing:', url);
  
  try {
    const response = await fetch(url, { cache: 'no-store' });
    const text = await response.text();
    
    return {
      url,
      status: response.status,
      statusText: response.statusText,
      contentType: response.headers.get('content-type'),
      bodyPreview: text.substring(0, 200) + (text.length > 200 ? '...' : ''),
      bodyLength: text.length
    };
  } catch (error) {
    return {
      url,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};