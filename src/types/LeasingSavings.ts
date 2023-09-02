import { Money } from "./Money";
import { SavingsOverTime } from "./SavingsOverTime";

/**
 * Cost and benefit of leasing a particular configuration of solar panels with a particular electricity usage.
 */
export type LeasingSavings = {
  /**
   * Whether leases are allowed in this juristiction (leases are not allowed in some states). If this field is false, then the values in this message should probably be ignored.
   */
  leasesAllowed: boolean;

  /**
   * Whether leases are supported in this juristiction by the financial calculation engine. If this field is false, then the values in this message should probably be ignored. This is independent of leasesAllowed: in some areas leases are allowed, but under conditions that aren't handled by the financial models.
   */
  leasesSupported: boolean;

  /**
   * Estimated annual leasing cost.
   */
  annualLeasingCost: Money;

  /**
   * How much is saved (or not) over the lifetime period.
   */
  savings: SavingsOverTime;
};
