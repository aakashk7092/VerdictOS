import CEOAgent from "../agents/executive/ceoAgent.js";

export const verdictEngine = async (
  reports,
  voting,
  debate
) => {
  try {
    const ceo = new CEOAgent();

    // Send only summarized reports to CEO
    const compactReports = reports.map(
      (report) => ({
        agent: report.agent,
        success: report.success,

        summary:
          report?.output?.summary ||
          report?.output?.executive_summary ||
          report?.output?.customer_summary ||
          report?.output?.final_recommendation ||
          report?.output?.recommendation ||
          "",
      })
    );

    const result = await ceo.run({
      reports: compactReports,
      voting,
      debate,
      timestamp:
        new Date().toISOString(),
    });

    return result;
  } catch (error) {
    console.error(
      "Verdict Engine Error:",
      error
    );

    return {
      agent: "CEO Agent",
      success: false,
      error:
        error.message ||
        "Failed to generate verdict",
    };
  }
};