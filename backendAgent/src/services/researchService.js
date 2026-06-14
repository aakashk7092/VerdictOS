import { searchWeb } from "../tools/tavily.js";

export const collectResearch =
  async (startupIdea) => {
    const searches =
      await Promise.all([
        searchWeb(
          `${startupIdea} market size`
        ),
        searchWeb(
          `${startupIdea} industry growth`
        ),
        searchWeb(
          `${startupIdea} competitors`
        ),
        searchWeb(
          `${startupIdea} customer reviews`
        ),
        searchWeb(
          `${startupIdea} customer pain points`
        ),
      ]);

    return searches.flat();
  };