import { agentRegistry } from "../agents/registry.js";

export const runAllAgents = async (
  startupIdea
) => {
  try {
    const input = {
      startupIdea,
    };

    console.log(
      `🚀 Starting ${agentRegistry.length} AI Agents in Parallel`
    );

    const results = await Promise.allSettled(
      agentRegistry.map(async (agent) => {
        try {
          console.log(
            `🧠 Running ${agent.name}`
          );

          const result =
            await agent.instance.run(
              input
            );

          console.log(
            `✅ ${agent.name} Completed`
          );

          return {
            ...result,
            weight: agent.weight,
          };
        } catch (err) {
          console.error(
            `❌ ${agent.name} Failed:`,
            err.message
          );

          return {
            agent: agent.name,
            success: false,
            error: err.message,
            weight: agent.weight,
          };
        }
      })
    );

    console.log(
      "🎉 All Agents Finished"
    );

    return results.map((result) =>
      result.status === "fulfilled"
        ? result.value
        : {
            success: false,
            error: String(
              result.reason
            ),
          }
    );
  } catch (error) {
    console.error(
      "❌ Agent Runner Error:",
      error
    );

    return [];
  }
};