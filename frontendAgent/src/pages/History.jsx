import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "verdict_history"
        )
      ) || [];

    setHistory(saved);
  }, []);

  return (
    <MainLayout>
      <div className="space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-white">
            Analysis History
          </h1>

          <p className="mt-2 text-zinc-400">
            Your past startup evaluations
          </p>
        </div>

        {/* Empty State */}
        {history.length === 0 ? (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center text-zinc-400">
            No history found. Run your first AI startup analysis.
          </div>
        ) : (
          <div className="grid gap-4">
            {history.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
              >
                <h2 className="text-lg font-semibold text-white">
                  {item.idea ||
                    "Untitled Idea"}
                </h2>

                <div className="mt-2 flex gap-6 text-sm text-zinc-400">
                  <span>
                    Score:{" "}
                    {
                      item
                        ?.finalVerdict
                        ?.startup_score
                    }
                  </span>

                  <span>
                    Decision:{" "}
                    {
                      item
                        ?.finalVerdict
                        ?.decision
                    }
                  </span>

                  <span>
                    Confidence:{" "}
                    {
                      item
                        ?.finalVerdict
                        ?.confidence
                    }
                    %
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default History;