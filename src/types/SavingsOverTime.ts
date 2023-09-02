import { Money } from "./Money";

/**
 * Financial information that's shared between different financing methods.
 */
export type SavingsOverTime = {
  /**
   * Savings in the first year after panel installation.
   */
  savingsYear1: Money;

  /**
   * Savings in the first twenty years after panel installation.
   */
  savingsYear20: Money;

  /**
   * Using the assumed discount rate, what is the present value of the cumulative 20-year savings?
   */
  presentValueOfSavingsYear20: Money;

  /**
   * Savings in the entire panel lifetime.
   */
  savingsLifetime: Money;

  /**
   * Using the assumed discount rate, what is the present value of the cumulative lifetime savings?
   */
  presentValueOfSavingsLifetime: Money;

  /**
   * Indicates whether this scenario is financially viable. Will be false for scenarios with poor financial viability (e.g., money-losing).
   */
  financiallyViable: boolean;
};
