import { LatLng } from "./LatLng";

/**
 * A bounding box in lat/lng coordinates.
 */
export type LatLngBox = {
  /**
   * The southwest corner of the box.
   */
  sw: LatLng;

  /**
   * The northeast corner of the box.
   */
  ne: LatLng;
};
  