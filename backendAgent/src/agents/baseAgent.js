import { GoogleGenAI } from "@google/genai";

export default class BaseAgent {
  constructor(name, systemPrompt) {
    this.name = name;
    this.systemPrompt = systemPrompt;
  }

  async run(input) {
    try {
      if (!process.env.GEMINI_API_KEY) {
        throw new Error(
          "GEMINI_API_KEY is missing"
        );
      }

      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
      });

      console.log(
        `🤖 ${this.name} started`
      );

      const response =
        await Promise.race([
          ai.models.generateContent({
            model:
              "gemini-2.5-flash",
            contents: `
You are ${this.name}.

IMPORTANT RULES:
- Respond ONLY with valid JSON.
- Do NOT use markdown.
- Do NOT wrap JSON in \`\`\`.

${this.systemPrompt}

INPUT:
${JSON.stringify(input)}
            `,
          }),

          new Promise(
            (_, reject) =>
              setTimeout(
                () =>
                  reject(
                    new Error(
                      "Agent Timeout"
                    )
                  ),
                20000
              )
          ),
        ]);

      let text = (
        response.text || ""
      )
        .replace(
          /```json/gi,
          ""
        )
        .replace(/```/g, "")
        .trim();

      let parsed;

      try {
        parsed =
          JSON.parse(text);
      } catch {
        parsed = {
          raw: text,
        };
      }

      console.log(
        `✅ ${this.name} completed`
      );

      return {
        agent: this.name,
        success: true,
        output: parsed,
      };
    } catch (error) {
      console.error(
        `❌ ${this.name} Error:`,
        error.message
      );

      return {
        agent: this.name,
        success: false,
        error:
          error.message,
      };
    }
  }
}