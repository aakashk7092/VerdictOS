const DebatePanel = ({ debate = [] }) => {
  if (!Array.isArray(debate) || debate.length === 0) {
    return null;
  }

  const safeText = (value) => {
    if (value === null || value === undefined) {
      return "No argument available";
    }

    if (typeof value === "object") {
      return JSON.stringify(value, null, 2);
    }

    return String(value);
  };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          🧠 AI Boardroom Debate
        </h2>

        <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-400">
          LIVE DISCUSSION
        </span>
      </div>

      <div className="space-y-5">
        {debate.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-zinc-800 bg-zinc-800/50 p-4"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-lg">
                🤖
              </div>

              <div>
                <h4 className="font-semibold text-blue-400">
                  {item?.agent || "Unknown Agent"}
                </h4>

                <p className="text-xs text-zinc-500">
                  Strategic Opinion
                </p>
              </div>
            </div>

            <p className="leading-relaxed text-zinc-300">
              {safeText(item?.argument)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebatePanel;