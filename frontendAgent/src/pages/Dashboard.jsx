import { useState, useContext } from "react";
import { motion } from "framer-motion";

import MainLayout from "../layouts/MainLayout";
import IdeaInput from "../components/IdeaInput";
import AgentCard from "../components/AgentCard";
import FinalVerdictCard from "../components/FinalVerdictCard";
import LoadingScreen from "../components/LoadingScreen";
import ErrorState from "../components/ErrorState";
import AgentThinking from "../components/AgentThinking";

import { VerdictContext } from "../context/VerdictContext";
import useAnalyzeStartup from "../hooks/useAnalyzeStartup";

const StatCard = ({ label, value, color }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg"
  >
    <p className="text-sm text-zinc-400">{label}</p>

    <h2 className={`mt-2 text-3xl font-bold ${color}`}>
      {value}
    </h2>
  </motion.div>
);

const Dashboard = () => {
  const [idea, setIdea] = useState("");

  const { analyze } = useAnalyzeStartup();

  const { result, loading, error } =
    useContext(VerdictContext);

  const handleAnalyze = () => {
    if (!idea.trim()) return;

    analyze(idea);
  };

  const reports = Array.isArray(result?.reports)
    ? result.reports.filter(
        (report) =>
          report?.success && report?.output
      )
    : [];

  return (
    <MainLayout>
      <div className="space-y-10">

        {/* HERO */}
        <div>
          <div className="inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            🚀 AI Startup Intelligence Engine
          </div>

          <h1 className="mt-4 text-6xl font-black text-white">
            VerdictOS
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-zinc-400">
            AI-powered boardroom simulation with
            Market, Finance, Risk, Growth,
            Customer and Investor agents.
          </p>
        </div>

        {/* AGENT THINKING */}
        <AgentThinking loading={loading} />

        {/* INPUT */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <IdeaInput
            idea={idea}
            setIdea={setIdea}
            handleAnalyze={handleAnalyze}
            loading={loading}
          />
        </div>

        {/* LOADING */}
        {loading && <LoadingScreen />}

        {/* ERROR */}
        {error && (
          <ErrorState message={error} />
        )}

        {/* RESULTS */}
        {!loading && result && (
          <>
            {/* KPI SECTION */}
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

              <StatCard
                label="Startup Score"
                value={
                  result?.finalVerdict
                    ?.startup_score || 0
                }
                color="text-green-400"
              />

              <StatCard
                label="Confidence"
                value={`${result?.finalVerdict?.confidence || 0}%`}
                color="text-blue-400"
              />

              <StatCard
                label="Agents Active"
                value={reports.length}
                color="text-purple-400"
              />

              <StatCard
                label="Decision"
                value={
                  result?.finalVerdict
                    ?.decision || "N/A"
                }
                color="text-yellow-400"
              />

            </div>

            {/* CEO VERDICT */}
            <FinalVerdictCard
              verdict={result?.finalVerdict}
            />

            {/* AGENT SUMMARY */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-6 text-2xl font-bold text-white">
                📊 Agent Intelligence Summary
              </h2>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

                {reports.map((report, index) => {
                  const summary =
                    report?.output?.summary ||
                    report?.output
                      ?.customer_summary ||
                    report?.output
                      ?.final_recommendation ||
                    "Analysis completed";

                  return (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="rounded-xl border border-zinc-800 bg-zinc-950 p-4"
                    >
                      <h3 className="font-bold text-white">
                        {report.agent}
                      </h3>

                      <p className="mt-2 text-sm text-zinc-400">
                        {typeof summary ===
                        "object"
                          ? JSON.stringify(
                              summary
                            )
                          : summary}
                      </p>
                    </motion.div>
                  );
                })}

              </div>
            </div>

            {/* FULL AGENT CARDS */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">
                🤖 AI Agent Analysis
              </h2>

              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {reports.map(
                  (report, index) => (
                    <AgentCard
                      key={
                        report.agent ||
                        index
                      }
                      report={report}
                    />
                  )
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Dashboard;