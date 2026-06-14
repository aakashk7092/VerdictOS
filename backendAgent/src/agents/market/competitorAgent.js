import BaseAgent from "../baseAgent.js";

export default class CompetitorAgent extends BaseAgent {
  constructor() {
    super(
      "Competitor Agent",
      `
Analyze competitors for the given startup idea.

Use the provided research evidence to identify:
- Existing competitors
- Competitive advantages
- Weaknesses in the market
- Market gaps
- Opportunities

Return ONLY valid JSON.

{
  "topCompetitors": [
    {
      "name": "",
      "strengths": [],
      "weaknesses": []
    }
  ],
  "competitionLevel": "LOW | MEDIUM | HIGH",
  "marketGap": "",
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
        agent:
          "Competitor Agent",
        success: false,
        error:
          error.message,
      };
    }
  }
}