// utils/urls.ts
// Always ensure full URL
const API_URL = process.env.NEXT_PUBLIC_API_URL 
  ? process.env.NEXT_PUBLIC_API_URL.startsWith('http')
    ? process.env.NEXT_PUBLIC_API_URL
    : `https://${process.env.NEXT_PUBLIC_API_URL}`
  : 'https://api.nexl.sansadigital.com';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://sansadigital.com';

console.log('API_URL configured as:', API_URL); // Debug log

export const urls = {
  api: {
    base: API_URL,
    storage: (path: string) => {
      if (!path) return '';
      
      // Remove any prefixes
      let cleanPath = path.trim();
      
      // Remove various possible prefixes
      if (cleanPath.startsWith('/api/storage/')) {
        cleanPath = cleanPath.substring(13);
      } else if (cleanPath.startsWith('/storage/')) {
        cleanPath = cleanPath.substring(9);
      } else if (cleanPath.startsWith('storage/')) {
        cleanPath = cleanPath.substring(8);
      }
      
      // Remove leading slash
      if (cleanPath.startsWith('/')) {
        cleanPath = cleanPath.substring(1);
      }
      
      return `${API_URL}/storage/${cleanPath}`;
    },
  },
  
  // ... rest of your utility
};