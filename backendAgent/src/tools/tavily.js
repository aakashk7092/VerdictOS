import axios from "axios";

export const searchWeb = async (query) => {
  try {
    console.log("🔍 Search Query:", query);

    const response = await axios.post(
      "https://api.tavily.com/search",
      {
        api_key: process.env.TAVILY_API_KEY,
        query,
        max_results: 5,
      }
    );

    return response.data.results || [];
  } catch (error) {
    console.error(
      "❌ Tavily Search Error:",
      error.message
    );

    return [];
  }
};