import express from "express";

import { runAllAgents } from "../orchestrator/agentRunner.js";
import { debateEngine } from "../orchestrator/debateEngine.js";
import { votingEngine } from "../orchestrator/votingEngine.js";
import { verdictEngine } from "../orchestrator/verdictEngine.js";
import { collectResearch } from "../services/researchService.js";

const router = express.Router();

router.post("/analyze", async (req, res) => {
  try {
    const startupIdea =
      req.body?.startupIdea;

    if (!startupIdea) {
      return res.status(400).json({
        success: false,
        message:
          "startupIdea is required",
      });
    }

    console.log(
      "🚀 Analyzing:",
      startupIdea
    );

    console.time("Research");

    const research =
      await collectResearch(
        startupIdea
      );

    console.timeEnd("Research");

    console.time("Agents");

    const reports =
      await runAllAgents(
        startupIdea,
        research
      );

    console.timeEnd("Agents");

    const debate =
      await debateEngine(reports);

    const voting =
      votingEngine(reports);

    const finalVerdict =
      await verdictEngine(
        reports,
        voting,
        debate
      );

    return res.status(200).json({
      success: true,
      startupIdea,
      reports,
      debate,
      voting,
      finalVerdict,
    });
  } catch (error) {
    console.error(
      "❌ Pipeline Error:",
      error
    );

    return res.status(500).json({
      success: false,
      error:
        error.message ||
        "Internal Server Error",
    });
  }
});

export default router;