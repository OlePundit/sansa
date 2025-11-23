'use server';

export const getServices = async () => {
  const baseUrl = process.env.APP_URL ?? "http://127.0.0.1:8000";
  const url = `${baseUrl}/api/services`;

  try {
    const response = await fetch(url, { 
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch services: ${response.status}`);
    }

    const data = await response.json();

    // Your Laravel API returns: { data: [...] }
    return Array.isArray(data.data) ? data.data : [];

  } catch (error) {
    console.error("[getServices] Error:", error);
    return [];
  }
};
