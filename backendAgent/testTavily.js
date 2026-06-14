import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

try {
  console.log("Testing Tavily...");

  const response = await axios.post(
    "https://api.tavily.com/search",
    {
      api_key: process.env.TAVILY_API_KEY,
      query: "AI startup",
      max_results: 3,
    },
    {
      timeout: 30000,
    }
  );

  console.log(response.data);
} catch (err) {
  console.error("FULL ERROR:");
  console.error(err);
}