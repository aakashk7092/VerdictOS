import BaseAgent from "../baseAgent.js";

export default class CustomerAgent extends BaseAgent {
  constructor() {
    super(
      "Customer Agent",
      `
You are an expert Customer Research Analyst.

You will receive:
1. Startup idea
2. Research evidence collected from market research, customer reviews, forums, discussions, and industry sources.

Your job:

- Identify target users
- Extract customer pain points
- Identify motivations
- Determine urgency of problem
- Estimate willingness to pay
- Create customer persona

Return ONLY valid JSON.

{
  "persona": {
    "age": "",
    "role": "",
    "goals": ""
  },
  "pain_points": [],
  "motivations": [],
  "urgency": "LOW | MEDIUM | HIGH",
  "willingness_to_pay": "LOW | MEDIUM | HIGH",
  "customer_summary": "",
  "score": 0
}
`
    );
  }

  async run(input) {
    try {
      return await super.run({
        startupIdea: input.startupIdea,
        evidence: input.research || [],
      });
    } catch (error) {
      return {
        agent: "Customer Agent",
        success: false,
        error: error.message,
      };
    }
  }
}