import BaseAgent from "../baseAgent.js";

export default class MarketAgent extends BaseAgent {
  constructor() {
    super(
      "Market Agent",
      `
Analyze the startup idea from a market perspective.

Use the provided research evidence to determine:
- Market size
- Industry growth
- Market trends
- Opportunity potential

Return ONLY valid JSON.

{
  "marketSize": "",
  "growthRate": "",
  "trends": [],
  "opportunityScore": 0,
  "summary": ""
}
`
    );
  }

  async run(input) {
    try {
      return await super.run({
        startupIdea:
          input.startupIdea,

        evidence:
          input.research || [],
      });
    } catch (error) {
      return {
        agent: "Market Agent",
        success: false,
        error: error.message,
      };
    }
  }
}