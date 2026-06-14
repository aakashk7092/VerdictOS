import {
  Brain,
  Loader2,
  Cpu,
} from "lucide-react";

const LoadingScreen = () => {
  const agents = [
    "Market Agent",
    "Competitor Agent",
    "Customer Agent",
    "Product Agent",
    "Finance Agent",
    "Risk Agent",
    "Investor Agent",
    "Growth Agent",
    "Pricing Agent",
    "MVP Agent",
    "CEO Agent",
  ];

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <Brain
          className="text-blue-400"
          size={28}
        />

        <div>
          <h2 className="text-xl font-bold text-white">
            AI Boardroom Active
          </h2>

          <p className="text-sm text-zinc-400">
            11 Agents are analyzing your startup idea
          </p>
        </div>
      </div>

      {/* Animated loader */}
      <div className="mb-6 flex items-center gap-3 text-blue-400">
        <Loader2 className="animate-spin" />
        <span className="text-sm">
          Running deep analysis...
        </span>
      </div>

      {/* Agent list */}
      <div className="grid gap-3 md:grid-cols-2">
        {agents.map((agent, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-800/40 px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <Cpu
                size={16}
                className="text-zinc-400"
              />

              <span className="text-sm text-zinc-300">
                {agent}
              </span>
            </div>

            <span className="animate-pulse text-xs text-blue-400">
              analyzing...
            </span>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-6 text-center text-xs text-zinc-500">
        Please wait while AI agents debate,
        evaluate and generate final verdict
      </div>
    </div>
  );
};

export default LoadingScreen;