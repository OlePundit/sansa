// utils/urls.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.nexl.sansadigital.com';
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://sansadigital.com';

export const urls = {
  // Backend URLs
  api: {
    base: API_URL,
    storage: (path: string) => `${API_URL}/storage${path.startsWith('/') ? path : `/${path}`}`,
    endpoint: (endpoint: string) => `${API_URL}/api${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`,
  },
  
  // Frontend URLs
  app: {
    base: APP_URL,
    page: (path: string) => `${APP_URL}${path.startsWith('/') ? path : `/${path}`}`,
  },
  
  // Transform any URL from frontend to backend domain
  toBackendUrl: (url: string): string => {
    if (!url) return '';
    
    // Replace any frontend domain with backend domain
    return url
      .replace('https://www.sansadigital.com', API_URL)
      .replace('https://sansadigital.com', API_URL);
  },
  
  // Transform any URL from backend to frontend domain
  toFrontendUrl: (url: string): string => {
    if (!url) return '';
    
    // Replace backend domain with frontend domain
    return url.replace(API_URL, APP_URL);
  },
};