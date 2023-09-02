import { CashPurchaseSavings } from "./CashPurchaseSavings";
import { FinancedPurchaseSavings } from "./FinancedPurchaseSavings";
import { FinancialDetails } from "./FinancialDetails";
import { LeasingSavings } from "./LeasingSavings";
import { Money } from "./Money";

/**
 * Analysis of the cost and benefits of the optimum solar layout for a particular electric bill size.
 */
export type FinancialAnalysis = {
  /**
   * The monthly electric bill this analysis assumes.
   */
  monthlyBill: Money;

  /**
   * Whether this is the bill size selected to be the default bill for the area this building is in. Exactly one FinancialAnalysis in BuildingSolarPotential should have defaultBill set.
   */
  defaultBill: boolean;

  /**
   * How much electricity the house uses in an average month, based on the bill size and the local electricity rates.
   */
  averageKwhPerMonth: number;

  /**
   * Financial information that applies regardless of the financing method used.
   */
  financialDetails: FinancialDetails;

  /**
   * Cost and benefit of leasing the solar panels.
   */
  leasingSavings: LeasingSavings;

  /**
   * Cost and benefit of buying the solar panels with cash.
   */
  cashPurchaseSavings: CashPurchaseSavings;

  /**
   * Cost and benefit of buying the solar panels by financing the purchase.
   */
  financedPurchaseSavings: FinancedPurchaseSavings;

  /**
   * Index in solarPanelConfigs of the optimum solar layout for this bill size.
   * This can be -1 indicating that there is no layout. In this case, the remaining submessages will be omitted.
   */
  panelConfigIndex: number;
};
