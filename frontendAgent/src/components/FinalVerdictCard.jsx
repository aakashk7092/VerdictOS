import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Brain,
  TrendingUp,
  ShieldAlert,
  Target,
  BarChart3,
} from "lucide-react";

const safeArray = (val) => {
  if (Array.isArray(val)) return val;
  if (!val) return [];
  return [String(val)];
};

const safeText = (val) => {
  if (!val) return "Not available";
  if (typeof val === "object") return JSON.stringify(val);
  return String(val);
};

const FinalVerdictCard = ({ verdict }) => {
  if (!verdict) return null;

  const decision = verdict.decision || "IMPROVE";

  const getStyle = () => {
    if (decision === "PROCEED" || decision === "BUILD") {
      return {
        color: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
        icon: <CheckCircle size={28} className="text-green-400" />,
      };
    }

    if (decision === "IMPROVE" || decision === "PIVOT") {
      return {
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
        icon: <AlertTriangle size={28} className="text-yellow-400" />,
      };
    }

    return {
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
      icon: <XCircle size={28} className="text-red-400" />,
    };
  };

  const style = getStyle();

  return (
    <div className={`rounded-3xl border ${style.border} bg-zinc-900 p-8 shadow-xl`}>

      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Brain size={32} className="text-blue-400" />

          <div>
            <h2 className="text-3xl font-bold text-white">
              CEO Verdict
            </h2>
            <p className="text-zinc-400">
              Final Startup Evaluation
            </p>
          </div>
        </div>

        <div className={`flex items-center gap-2 rounded-xl px-4 py-3 ${style.bg}`}>
          {style.icon}

          <span className={`font-bold text-xl ${style.color}`}>
            {decision}
          </span>
        </div>
      </div>

      {/* METRICS */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl bg-zinc-800 p-5">
          <div className="flex items-center gap-2">
            <BarChart3 size={18} />
            <span>Startup Score</span>
          </div>

          <h3 className="mt-3 text-4xl font-bold text-green-400">
            {verdict.startup_score || 0}
          </h3>
        </div>

        <div className="rounded-2xl bg-zinc-800 p-5">
          <div className="flex items-center gap-2">
            <Target size={18} />
            <span>Confidence</span>
          </div>

          <h3 className="mt-3 text-4xl font-bold text-blue-400">
            {String(verdict.confidence || 0).replace("%","")}%
          </h3>
        </div>

        <div className="rounded-2xl bg-zinc-800 p-5">
          <div className="flex items-center gap-2">
            <TrendingUp size={18} />
            <span>Decision</span>
          </div>

          <h3 className={`mt-3 text-2xl font-bold ${style.color}`}>
            {decision}
          </h3>
        </div>

      </div>

      {/* SUMMARY */}
      <div className="mb-6 rounded-2xl bg-zinc-800 p-6">
        <h3 className="mb-3 text-lg font-semibold text-white">
          Executive Summary
        </h3>

        <p className="leading-relaxed text-zinc-300">
          {safeText(verdict.summary)}
        </p>
      </div>

      {/* STRENGTHS + RISKS */}
      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl bg-zinc-800 p-6">
          <div className="mb-4 flex items-center gap-2">
            <TrendingUp size={18} className="text-green-400" />
            <h3 className="font-semibold text-white">Key Strengths</h3>
          </div>

          <ul className="space-y-2 text-zinc-300">
            {safeArray(verdict.key_strengths).map((item, i) => (
              <li key={i}>• {safeText(item)}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-zinc-800 p-6">
          <div className="mb-4 flex items-center gap-2">
            <ShieldAlert size={18} className="text-red-400" />
            <h3 className="font-semibold text-white">Key Risks</h3>
          </div>

          <ul className="space-y-2 text-zinc-300">
            {safeArray(verdict.key_risks).map((item, i) => (
              <li key={i}>• {safeText(item)}</li>
            ))}
          </ul>
        </div>

      </div>

      {/* FINAL RECOMMENDATION */}
      <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">
        <h3 className="mb-3 font-semibold text-blue-300">
          Final Recommendation
        </h3>

        <p className="text-zinc-200">
          {safeText(verdict.final_recommendation)}
        </p>
      </div>

    </div>
  );
};

export default FinalVerdictCard;