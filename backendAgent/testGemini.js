import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

try {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Say hello",
  });

  console.log("✅ Gemini Working:");
  console.log(response.text);
} catch (err) {
  console.error("❌ Gemini Error:");
  console.error(err);
}