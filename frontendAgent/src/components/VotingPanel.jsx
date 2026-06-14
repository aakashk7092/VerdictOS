import {
  CheckCircle,
  TrendingUp,
  Target,
  Award,
} from "lucide-react";

const VotingPanel = ({ voting }) => {
  if (!voting) return null;

  const verdict = voting.verdict || "PIVOT";

  const getStyle = () => {
    if (verdict === "BUILD") {
      return {
        color: "text-green-400",
        bg: "bg-green-500/10",
        icon: (
          <CheckCircle className="text-green-400" />
        ),
      };
    }

    if (verdict === "PIVOT") {
      return {
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        icon: (
          <Target className="text-yellow-400" />
        ),
      };
    }

    return {
      color: "text-red-400",
      bg: "bg-red-500/10",
      icon: (
        <TrendingUp className="text-red-400" />
      ),
    };
  };

  const style = getStyle();

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <Award className="text-blue-400" />

        <div>
          <h2 className="text-xl font-bold text-white">
            AI Voting Results
          </h2>

          <p className="text-sm text-zinc-400">
            Weighted decision from all agents
          </p>
        </div>
      </div>

      {/* Score */}
      <div className="mb-5 rounded-xl bg-zinc-800 p-4">
        <p className="text-sm text-zinc-400">
          Weighted Score
        </p>

        <h3 className="text-3xl font-bold text-white">
          {voting.weightedScore || 0}
        </h3>
      </div>

      {/* Verdict */}
      <div
        className={`flex w-fit items-center gap-2 rounded-xl px-4 py-2 ${style.bg}`}
      >
        {style.icon}

        <span
          className={`font-bold ${style.color}`}
        >
          {verdict}
        </span>
      </div>

      {/* Insight */}
      <p className="mt-5 text-sm text-zinc-400">
        Final decision based on weighted consensus of all AI agents including market, finance, product and risk analysis.
      </p>
    </div>
  );
};

export default VotingPanel;