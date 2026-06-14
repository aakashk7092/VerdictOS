const weights = {
  "Market Agent": 0.15,
  "Competitor Agent": 0.10,
  "Customer Agent": 0.15,
  "Product Agent": 0.10,
  "MVP Agent": 0.05,
  "Finance Agent": 0.15,
  "Pricing Agent": 0.05,
  "Growth Agent": 0.10,
  "Risk Agent": 0.05,
  "Investor Agent": 0.10,
};

export const votingEngine = (reports) => {
  try {
    let total = 0;
    const breakdown = {};

    reports.forEach((report) => {
      if (!report?.success || !report?.output) return;

      const output = report.output;

      const score =
        Number(
          output.score ??
          output.market_score ??
          output.product_score ??
          output.investment_score ??
          output.startup_score ??
          50
        ) || 50;

      const weight = weights[report.agent] || 0.05;

      breakdown[report.agent] = {
        score,
        weight,
        contribution: Number((score * weight).toFixed(2)),
      };

      total += score * weight;
    });

    let verdict = "REJECT";

    if (total >= 80) {
      verdict = "PROCEED";
    } else if (total >= 65) {
      verdict = "IMPROVE";
    }

    return {
      weightedScore: Number(total.toFixed(2)),
      verdict,
      breakdown,
    };
  } catch (error) {
    console.error("Voting Engine Error:", error);

    return {
      weightedScore: 0,
      verdict: "REJECT",
      breakdown: {},
    };
  }
};