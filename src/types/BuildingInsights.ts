import { Date } from "./Date";
import { ImageryQuality } from "./ImageryQuality";
import { LatLng } from "./LatLng";
import { LatLngBox } from "./LatLngBox";
import { SolarPotential } from "./SolarPotential";

/**
 * Response message for Solar.FindClosestBuildingInsights.
 * Information about the location, dimensions, and solar potential of a building.
 */
export type BuildingInsights = {
  /**
   * The resource name for the building, of the format building/<place ID>.
   */
  name: string;

  /**
   * A point near the center of the building.
   */
  center: LatLng;

  /**
   * The bounding box of the building.
   */
  boundingBox: LatLngBox;

  /**
   * Date that the underlying imagery was acquired. This is approximate.
   */
  imageryDate: Date;

  /**
   * When processing was completed on this imagery.
   */
  imageryProcessedDate: Date;

  /**
   * Postal code (e.g., US zip code) this building is contained by.
   */
  postalCode: string;

  /**
   * Administrative area 1 (e.g., in the US, the state) that contains this building. For example, in the US, the abbreviation might be "MA" or "CA."
   */
  administrativeArea: string;

  /**
   * Statistical area (e.g., US census tract) this building is in.
   */
  statisticalArea: string;

  /**
   * Region code for the country (or region) this building is in.
   */
  regionCode: string;

  /**
   * Solar potential of the building.
   */
  solarPotential: SolarPotential;
};
  