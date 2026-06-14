import MarketAgent from "./market/marketAgent.js";
import CompetitorAgent from "./market/competitorAgent.js";
import CustomerAgent from "./customer/customerAgent.js";
import ProductAgent from "./product/productAgent.js";
import MVPAgent from "./product/mvpAgent.js";
import FinanceAgent from "./finance/financeAgent.js";
import PricingAgent from "./finance/pricingAgent.js";
import GrowthAgent from "./growth/growthAgent.js";
import RiskAgent from "./risk/riskAgent.js";
import InvestorAgent from "./investor/investorAgent.js";

export const agentRegistry = [
  {
    name: "Market Agent",
    weight: 0.20,
    instance: new MarketAgent(),
  },
  {
    name: "Competitor Agent",
    weight: 0.10,
    instance: new CompetitorAgent(),
  },
  {
    name: "Customer Agent",
    weight: 0.15,
    instance: new CustomerAgent(),
  },
  {
    name: "Product Agent",
    weight: 0.10,
    instance: new ProductAgent(),
  },
  {
    name: "MVP Agent",
    weight: 0.05,
    instance: new MVPAgent(),
  },
  {
    name: "Finance Agent",
    weight: 0.15,
    instance: new FinanceAgent(),
  },
  {
    name: "Pricing Agent",
    weight: 0.05,
    instance: new PricingAgent(),
  },
  {
    name: "Growth Agent",
    weight: 0.10,
    instance: new GrowthAgent(),
  },
  {
    name: "Risk Agent",
    weight: 0.05,
    instance: new RiskAgent(),
  },
  {
    name: "Investor Agent",
    weight: 0.05,
    instance: new InvestorAgent(),
  },
];