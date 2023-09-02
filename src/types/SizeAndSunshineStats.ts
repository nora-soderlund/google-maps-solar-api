/**
 * Size and sunniness quantiles of a roof, or part of a roof.
 */
export type SizeAndSunshineStats = {
  /**
   * The area of the roof or roof segment, in m^2.
   * This is the roof area (accounting for tilt), not the ground footprint area.
   */
  areaMeters2: number;

  /**
   * Quantiles of the pointwise sunniness across the area.
   * If there are N values here, this represents the (N-1)-iles.
   * For example, if there are 5 values, then they would be the quartiles (min, 25%, 50%, 75%, max).
   * Values are in annual kWh/kW like maxSunshineHoursPerYear.
   */
  sunshineQuantiles: number[];

  /**
   * The ground footprint area covered by the roof or roof segment, in m^2.
   */
  groundAreaMeters2: number;
};