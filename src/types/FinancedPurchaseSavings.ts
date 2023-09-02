import { Money } from "./Money";
import { SavingsOverTime } from "./SavingsOverTime";

/**
 * Cost and benefit of using a loan to buy a particular configuration of solar panels with a particular electricity usage. Initial out of pocket cost is zero in our model: the loan covers everything.
 */
export type FinancedPurchaseSavings = {
  /**
   * Annual loan payments.
   */
  annualLoanPayment: Money;

  /**
   * The value of all tax rebates (including Federal Investment Tax Credit (ITC)).
   */
  rebateValue: Money;

  /**
   * The interest rate on loans assumed in this set of calculations.
   */
  loanInterestRate: number;

  /**
   * How much is saved (or not) over the lifetime period.
   */
  savings: SavingsOverTime;
};
