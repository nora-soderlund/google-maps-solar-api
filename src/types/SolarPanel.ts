import { LatLng } from "./LatLng";
import { SolarPanelOrientation } from "./SolarPanelOrientation";

/**
 * SolarPanel describes the position, orientation, and production of a single solar panel.
 * See the panelHeightMeters, panelWidthMeters,
 * and panelCapacityWatts fields in SolarPotential for information on the parameters of the panel.
 */
export type SolarPanel = {
  /**
   * The centre of the panel.
   */
  center: LatLng;

  /**
   * The orientation of the panel.
   */
  orientation: SolarPanelOrientation;

  /**
   * How much sunlight energy this layout captures over the course of a year, in DC kWh.
   */
  yearlyEnergyDcKwh: number;

  /**
   * Index in roofSegmentStats of the RoofSegmentSizeAndSunshineStats which corresponds to the roof segment that this panel is placed on.
   */
  segmentIndex: number;
};
