import {
  Sparkles,
  Brain,
  Loader2,
} from "lucide-react";

const IdeaInput = ({
  idea,
  setIdea,
  handleAnalyze,
  loading,
}) => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <Brain className="text-blue-400" />

        <h2 className="text-xl font-bold text-white">
          AI Startup Analyzer
        </h2>
      </div>

      <p className="mb-4 text-sm text-zinc-400">
        Enter your startup idea and let 11 AI agents analyze market, product, finance, risk and investor potential.
      </p>

      {/* Input + Button */}
      <div className="flex flex-col gap-4 md:flex-row">
        <textarea
          value={idea}
          onChange={(e) =>
            setIdea(e.target.value)
          }
          placeholder="Example: AI platform for personalized learning using adaptive models..."
          className="h-28 flex-1 resize-none rounded-xl border border-zinc-700 bg-zinc-800 p-4 text-white outline-none transition focus:border-blue-500"
        />

        <button
          disabled={loading}
          onClick={handleAnalyze}
          className={`flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold transition md:w-48 ${
            loading
              ? "cursor-not-allowed bg-zinc-700 text-zinc-300"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles />
              Analyze Idea
            </>
          )}
        </button>
      </div>

      {/* Hint */}
      <div className="mt-4 text-xs text-zinc-500">
        Tip: Be specific about target users, problem, and solution for better AI analysis.
      </div>
    </div>
  );
};

export default IdeaInput;