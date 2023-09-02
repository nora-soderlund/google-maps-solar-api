import { FinancialAnalysis } from "./FinancialAnalysis";
import { RoofSegmentSizeAndSunshineStats } from "./RoofSegmentSizeAndSunshineStats";
import { SizeAndSunshineStats } from "./SizeAndSunshineStats";
import { SolarPanel } from "./SolarPanel";
import { SolarPanelConfig } from "./SolarPanelConfig";

/**
 * Information about the solar potential of a building.
 * A number of fields in this are defined in terms of "panels".
 * The fields panelCapacityWatts, panelHeightMeters, and panelWidthMeters describe the parameters of the model of panel used in these calculations.
 */
export type SolarPotential = {
  /**
   * Size of the maximum array - that is, the maximum number of panels that can fit on the roof.
  */
  maxArrayPanelsCount: number;

  /**
   * Capacity, in watts, of the panel used in the calculations.
   */
  panelCapacityWatts: number;

  /**
   * Height, in meters in portrait orientation, of the panel used in the calculations.
   */
  panelHeightMeters: number;

  /**
   * Width, in meters in portrait orientation, of the panel used in the calculations.
   */
  panelWidthMeters: number;

  /**
   * The expected lifetime, in years, of the solar panels. This is used in the financial calculations.
   */
  panelLifetimeYears: number;

  /**
   * Size, in square meters, of the maximum array.
   */
  maxArrayAreaMeters2: number;

  /**
   * Maximum number of sunshine hours received per year, by any point on the roof.
   * Sunshine hours are a measure of the total amount of insolation (energy) received per year.
   * 1 sunshine hour = 1 kWh per kW (where kW refers to kW of capacity under Standard Testing Conditions).
   */
  maxSunshineHoursPerYear: number;

  /**
   * Equivalent amount of CO2 produced per MWh of grid electricity.
   * This is a measure of the carbon intensity of grid electricity displaced by solar electricity.
   */
  carbonOffsetFactorKgPerMwh: number;

  /**
   * Total size and sunlight quantiles for the part of the roof that was assigned to some roof segment.
   * Despite the name, this may not include the entire building. See buildingStats.
   */
  wholeRoofStats: SizeAndSunshineStats;

  /**
   * Size and sunlight quantiles for the entire building, including parts of the roof that were not assigned to some roof segment.
   * Because the orientations of these parts are not well characterised, the roof area estimate is unreliable,
   * but the ground area estimate is reliable.
   * It may be that a more reliable whole building roof area can be obtained by scaling the roof area from wholeRoofStats by the ratio of the ground areas of buildingStats and wholeRoofStats.
   */
  buildingStats: SizeAndSunshineStats;

  /**
   * Size and sunlight quantiles for each roof segment.
   */
  roofSegmentStats: RoofSegmentSizeAndSunshineStats[];

  /**
   * Each SolarPanel describes a single solar panel.
   * They are listed in the order that the panel layout algorithm placed this.
   * This is usually, though not always, in decreasing order of annual energy production.
   */
  solarPanels: SolarPanel[];

  /**
   * Each SolarPanelConfig describes a different arrangement of solar panels on the roof.
   * They are in order of increasing number of panels.
   * The SolarPanelConfig with panelsCount=N is based on the first N panels in the solarPanels list.
   */
  solarPanelConfigs: SolarPanelConfig[];

  /**
   * A FinancialAnalysis gives the savings from going solar assuming a given monthly bill and a given electricity provider.
   * They are in order of increasing order of monthly bill amount.
   * This field will be empty for buildings in areas for which the Solar API does not have enough information to perform financial computations.
   */
  financialAnalyses: FinancialAnalysis[];
};
  