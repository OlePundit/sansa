'use server';

export const getHomeData = async (filters?: { webs?: boolean; digitals?: boolean }) => {
  try {
    const params = new URLSearchParams();

    if (filters?.webs) params.append('webs', 'true');
    if (filters?.digitals) params.append('digitals', 'true');

    const baseUrl = process.env.APP_URL || 'http://127.0.0.1:8000';
    const url = `${baseUrl}/api/home${params.toString() ? `?${params.toString()}` : ''}`;

    console.log('Fetching from:', url); // Debug log

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    console.log('Response status:', response.status); // Debug log

    if (!response.ok) {
      // Get more error details
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`Failed to fetch home data: ${response.status} - ${errorText}`);
    }

    const json = await response.json();
    console.log('Response data:', json); // Debug log

    return {
      packages: json.packages?.data || [],
      services: json.services || [],
      meta: json.packages?.meta || null,
    };
  } catch (error) {
    console.error('Error in getHomeData:', error);
    throw error;
  }
};