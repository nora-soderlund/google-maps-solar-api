import { Money } from "./Money";

/**
 * Details of a financial analysis.
 * Some of these details are already stored at higher levels (e.g., out of pocket cost).
 * Total money amounts are over a lifetime period defined by the panelLifetimeYears field in SolarPotential.
 * Note: The out of pocket cost of purchasing the panels is given in the outOfPocketCost field in CashPurchaseSavings.
 */
export type FinancialDetails = {
  /**
   * How many AC kWh we think the solar panels will generate in their first year.
   */
  initialAcKwhPerYear: number;

  /**
   * Utility bill for electricity not produced by solar, for the lifetime of the panels.
   */
  remainingLifetimeUtilityBill: Money;

  /**
   * Amount of money available from federal incentives; this applies if the user buys (with or without a loan) the panels.
   */
  federalIncentive: Money;

  /**
   * Amount of money available from state incentives; this applies if the user buys (with or without a loan) the panels.
   */
  stateIncentive: Money;

  /**
   * Amount of money available from utility incentives; this applies if the user buys (with or without a loan) the panels.
   */
  utilityIncentive: Money;

  /**
   * Amount of money the user will receive from Solar Renewable Energy Credits over the panel lifetime; this applies if the user buys (with or without a loan) the panels.
   */
  lifetimeSrecTotal: Money;

  /**
   * Total cost of electricity the user would have paid over the lifetime period if they didn't install solar.
   */
  costOfElectricityWithoutSolar: Money;

  /**
   * Whether net metering is allowed.
   */
  netMeteringAllowed: boolean;

  /**
   * Percentage (0-100) of the user's power supplied by solar. Valid for the first year but approximately correct for future years.
   */
  solarPercentage: number;

  /**
   * The percentage (0-100) of solar electricity production we assumed was exported to the grid, based on the first quarter of production. This affects the calculations if net metering is not allowed.
   */
  percentageExportedToGrid: number;
};
