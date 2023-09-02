import { RoofSegmentSummary } from "./RoofSegmentSummary";

/**
 * SolarPanelConfig describes a particular placement of solar panels on the roof.
 */
export type SolarPanelConfig = {
  /**
   * Total number of panels. Note that this is redundant to (the sum of) the corresponding fields in roofSegmentSummaries.
   */
  panelsCount: number;

  /**
   * How much sunlight energy this layout captures over the course of a year, in DC kWh, assuming the panels described above.
   */
  yearlyEnergyDcKwh: number;

  /**
   * Information about the production of each roof segment that is carrying at least one panel in this layout.
   * roofSegmentSummaries[i] describes the i-th roof segment, including its size, expected production and orientation.
   */
  roofSegmentSummaries: RoofSegmentSummary[];
};
