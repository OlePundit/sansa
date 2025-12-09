// REMOVE 'use server';

export const createContact = async (formData) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";
  const url = `${baseUrl}/api/contact`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Failed: ${response.status}`);
    }

    return await response.json();

  } catch (error) {
    console.error("[createContact] error:", error);
    return null;
  }
};
