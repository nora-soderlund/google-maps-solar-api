/**
 * Information about a roof segment on the building, with some number of panels placed on it.
 */
export type RoofSegmentSummary = {
  /**
   * The total number of panels on this segment.
   */
  panelsCount: number;

  /**
   * How much sunlight energy this part of the layout captures over the course of a year, in DC kWh, assuming the panels described above.
   */
  yearlyEnergyDcKwh: number;

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
   * Index in roofSegmentStats of the corresponding RoofSegmentSizeAndSunshineStats.
   */
  segmentIndex: number;
};
