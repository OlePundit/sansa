'use server';

export const getHomeData = async (filters?: { webs?: boolean; digitals?: boolean }) => {
  try {
    const params = new URLSearchParams();

    if (filters?.webs) params.append('webs', 'true');
    if (filters?.digitals) params.append('digitals', 'true');

    const baseUrl = process.env.APP_URL || 'http://127.0.0.1:8000';
    const url = `${baseUrl}/api/home${params.toString() ? `?${params.toString()}` : ''}`;

    console.log('Fetching from:', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`Failed to fetch home data: ${response.status} - ${errorText}`);
    }

    const json = await response.json();
    console.log('Response data:', json);

    // FIX: Use the new API response structure
    // Parse features from string to array for both webs and digitals
    const parseFeatures = (pkg: any) => ({
      ...pkg,
      features: typeof pkg.features === 'string' ? JSON.parse(pkg.features) : pkg.features
    });

    const webs = (json.webs || []).map(parseFeatures);
    const digitals = (json.digitals || []).map(parseFeatures);

    return {
      webs: webs,
      digitals: digitals,
      services: json.services || [],
      meta: json.meta || null,
    };
  } catch (error) {
    console.error('Error in getHomeData:', error);
    throw error;
  }
};