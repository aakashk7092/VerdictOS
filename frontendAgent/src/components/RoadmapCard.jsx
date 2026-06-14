import {
  Calendar,
  Rocket,
  Target,
} from "lucide-react";

const RoadmapCard = ({ roadmap }) => {
  if (!roadmap) return null;

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <Rocket
          className="text-blue-400"
          size={22}
        />

        <div>
          <h2 className="text-xl font-bold text-white">
            Startup Roadmap
          </h2>

          <p className="text-sm text-zinc-400">
            AI-generated execution plan
          </p>
        </div>
      </div>

      {/* 30 Days */}
      <div className="mb-6 rounded-xl border border-zinc-800 bg-zinc-800/40 p-4">
        <div className="mb-3 flex items-center gap-2">
          <Calendar
            size={18}
            className="text-green-400"
          />

          <h3 className="font-semibold text-white">
            First 30 Days
          </h3>
        </div>

        <ul className="space-y-2 text-sm text-zinc-300">
          {roadmap["30_days"]?.map(
            (item, idx) => (
              <li key={idx}>
                • {item}
              </li>
            )
          ) || (
            <li className="text-zinc-500">
              No data available
            </li>
          )}
        </ul>
      </div>

      {/* Future section ready */}
      {roadmap["90_days"] && (
        <div className="mb-6 rounded-xl border border-zinc-800 bg-zinc-800/40 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Target
              size={18}
              className="text-yellow-400"
            />

            <h3 className="font-semibold text-white">
              Next 90 Days
            </h3>
          </div>

          <ul className="space-y-2 text-sm text-zinc-300">
            {roadmap["90_days"].map(
              (item, idx) => (
                <li key={idx}>
                  • {item}
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* Year vision */}
      {roadmap["1_year"] && (
        <div className="rounded-xl border border-zinc-800 bg-zinc-800/40 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Rocket
              size={18}
              className="text-purple-400"
            />

            <h3 className="font-semibold text-white">
              1 Year Vision
            </h3>
          </div>

          <ul className="space-y-2 text-sm text-zinc-300">
            {roadmap["1_year"].map(
              (item, idx) => (
                <li key={idx}>
                  • {item}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RoadmapCard;