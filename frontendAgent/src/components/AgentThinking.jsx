const AgentThinking = ({ loading }) => {
  if (!loading) return null;

  const steps = [
    "Market Agent analyzing demand...",
    "Competitor Agent scanning rivals...",
    "Customer Agent studying pain points...",
    "Finance Agent calculating viability...",
    "Risk Agent evaluating threats...",
  ];

  return (
    <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6 text-blue-300">
      <p className="mb-3 font-semibold">
        AI Agents Working...
      </p>

      <ul className="space-y-2 text-sm">
        {steps.map((s, i) => (
          <li key={i} className="animate-pulse">
            • {s}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgentThinking;