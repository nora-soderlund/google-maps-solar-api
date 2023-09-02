import { GOOGLE_MAPS_SOLAR_API_BASE } from "../constants";
import { BuildingInsights } from "../types/BuildingInsights";
import { ImageryQuality } from "../types/ImageryQuality";
import { LatLng } from "../types/LatLng";

export type FindClosestBuildingInsightsParameters = {
  /**
   * The longitude and latitude from which the API looks for the nearest known building.
   */
  location: LatLng;

  /**
   * The minimum quality level allowed in the results.
   * No result with lower quality than this will be returned.
   * Not specifying this is equivalent to restricting to HIGH quality only.
   */
  requiredQuality?: ImageryQuality;
};

export async function findClosestBuildingInsights(apiKeyOrProxyUrl: string | URL, query: FindClosestBuildingInsightsParameters): Promise<BuildingInsights> {
  const url = new URL("/v1/buildingInsights:findClosest", GOOGLE_MAPS_SOLAR_API_BASE);

  if(typeof apiKeyOrProxyUrl === "string")
    url.searchParams.set("key", apiKeyOrProxyUrl);
  else
    url.host = apiKeyOrProxyUrl.host;

  url.searchParams.set("location.latitude", query.location.latitude.toString());
  url.searchParams.set("location.longitude", query.location.longitude.toString());

  if(query.requiredQuality)
    url.searchParams.set("requiredQuality", query.requiredQuality);

  const response = await fetch(url);

  if(!response.ok)
    throw new Error("Google Maps Solar API returned a not-OK response: " + response.status + " " + response.statusText);

  return await response.json();
};
