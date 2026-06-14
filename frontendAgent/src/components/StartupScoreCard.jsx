const StartupScoreCard = ({
  score,
  probability,
}) => {
  return (
    <div className="bg-zinc-900 rounded-xl p-6">
      <h3 className="text-zinc-400 mb-3">
        Startup Score
      </h3>

      <h1 className="text-6xl font-bold text-green-400">
        {score || 0}
      </h1>

      <p className="mt-3 text-zinc-300">
        Success Probability: {probability || 0}%
      </p>
    </div>
  );
};

export default StartupScoreCard;