export async function getTiff(apiKey: string, baseUrl: string | URL): Promise<ArrayBuffer> {
  const url = new URL(baseUrl);
  url.searchParams.set("key", apiKey);

  const response = await fetch(url);
  
  if(!response.ok)
    throw new Error("Google Maps Solar API returned a not-OK response: " + response.status + " " + response.statusText);

  return response.arrayBuffer();
};
