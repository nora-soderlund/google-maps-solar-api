import { LatLng } from "./LatLng";
import { LatLngBox } from "./LatLngBox";
import { SizeAndSunshineStats } from "./SizeAndSunshineStats";

/**
 * Information about the size and sunniness quantiles of a roof segment.
 */
export type RoofSegmentSizeAndSunshineStats = {
  /**
   * Total size and sunlight quantiles for the roof segment.
   */
  stats: SizeAndSunshineStats;

  /**
   * A point near the center of the roof segment.
   */
  center: LatLng;

  /**
   * The bounding box of the roof segment.
   */
  boundingBox: LatLngBox;

  /**
   * Angle of the roof segment relative to the theoretical ground plane.
   * 0 = parallel to the ground, 90 = perpendicular to the ground.
   */
  pitchDegrees: number;

  /**
   * Compass direction the roof segment is pointing in.
   * 0 = North, 90 = East, 180 = South.
   * For a "flat" roof segment (pitchDegrees very near 0), azimuth is not well defined, so for consistency, we define it arbitrarily to be 0 (North).
   */
  azimuthDegrees: number;

  /**
   * The height of the roof segment plane, in meters above sea level, at the point designated by center.
   * Together with the pitch, azimuth, and center location, this fully defines the roof segment plane.
   */
  planeHeightAtCenterMeters: number;
};
