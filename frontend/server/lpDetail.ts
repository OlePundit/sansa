export async function getLp(slug: string) {
  const baseUrl = process.env.APP_URL ?? "http://127.0.0.1:8000";
  const url = `${baseUrl}/api/lps/${slug}`;

  console.log('🔄 Fetching from URL:', url);

  try {
    const response = await fetch(url, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    console.log('📡 Response status:', response.status);
    console.log('📡 Response ok:', response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ HTTP Error:', response.status, errorText);
      throw new Error(`Failed to fetch lp: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('📦 Full API result:', result);
    console.log('📦 Data property:', result.data);
    
    return result.data;
    
  } catch (error) {
    console.error('💥 [getLp] Fetch error:', error);  
    return null;
  }
}