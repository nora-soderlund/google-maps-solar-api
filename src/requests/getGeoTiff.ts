export async function getGeoTiff(apiKeyOrProxyUrl: string | URL, baseUrl: string | URL): Promise<ArrayBuffer> {
  const url = new URL(baseUrl);
  
  if(typeof apiKeyOrProxyUrl === "string")
    url.searchParams.set("key", apiKeyOrProxyUrl);
  else
    url.host = apiKeyOrProxyUrl.host;

  const response = await fetch(url);
  
  if(!response.ok)
    throw new Error("Google Maps Solar API returned a not-OK response: " + response.status + " " + response.statusText);

  return response.arrayBuffer();
};
