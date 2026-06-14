export const debateEngine = async (reports) => {
  try {
    return reports
      .filter(
        (report) =>
          report &&
          report.success &&
          report.output
      )
      .map((report) => ({
        agent: report.agent,
        argument:
          report.output.summary ||
          report.output.customer_summary ||
          report.output.executive_summary ||
          report.output.final_recommendation ||
          JSON.stringify(report.output),
      }));
  } catch (error) {
    console.error("Debate Engine Error:", error);

    return [];
  }
};