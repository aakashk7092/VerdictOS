const AgentCard = ({ report }) => {
  if (!report?.success || !report?.output) return null;

  const data = report.output;

  const safeString = (value) => {
    if (value === null || value === undefined) return "-";

    if (typeof value === "object") {
      return JSON.stringify(value);
    }

    return String(value);
  };

  const score =
    data.score ||
    data.opportunityScore ||
    data.investment_score ||
    data.virality_score ||
    0;

  const summary =
    data.summary ||
    data.customer_summary ||
    data.final_recommendation ||
    "Analysis completed";

  return (
    <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-6 shadow-xl">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            {report.agent}
          </h2>
          <p className="text-sm text-zinc-500">
            AI Analysis Complete
          </p>
        </div>

        <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs text-green-400">
          ACTIVE
        </span>
      </div>

      {/* Score */}
      <div className="mb-5">
        <div className="mb-2 flex justify-between text-sm text-zinc-400">
          <span>Score</span>
          <span className="text-blue-400 font-bold">
            {score}/100
          </span>
        </div>

        <div className="h-2 rounded-full bg-zinc-800">
          <div
            className="h-2 rounded-full bg-blue-500"
            style={{ width: `${Math.min(score, 100)}%` }}
          />
        </div>
      </div>

      {/* Summary */}
      <div className="mb-5 rounded-2xl bg-zinc-800/50 p-4 text-sm text-zinc-300">
        {safeString(summary)}
      </div>

      {/* Key Data */}
      <div className="space-y-3">
        {Object.entries(data || {})
          .slice(0, 4)
          .map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 p-3"
            >
              <span className="text-xs uppercase text-zinc-500">
                {key}
              </span>

              <span className="max-w-[60%] text-right text-sm text-zinc-300">
                {safeString(value).slice(0, 60)}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AgentCard;