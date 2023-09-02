import { Money } from "./Money";
import { SavingsOverTime } from "./SavingsOverTime";

/**
 * Cost and benefit of an outright purchase of a particular configuration of solar panels with a particular electricity usage.
 */
export type CashPurchaseSavings = {
  /**
   * Initial cost before tax incentives: the amount that must be paid out-of-pocket. Contrast with upfrontCost, which is after tax incentives.
   */
  outOfPocketCost: Money;

  /**
   * Initial cost after tax incentives: it's the amount that must be paid during first year. Contrast with outOfPocketCost, which is before tax incentives.
   */
  upfrontCost: Money;

  /**
   * The value of all tax rebates.
   */
  rebateValue: Money;

  /**
   * How much is saved (or not) over the lifetime period.
   */
  savings: SavingsOverTime;

  /**
   * Number of years until payback occurs. A negative value means payback never occurs within the lifetime period.
   */
  paybackYears: number;
};
