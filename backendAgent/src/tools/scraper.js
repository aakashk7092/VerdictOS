import axios from "axios";
import * as cheerio from "cheerio";

export const scrapeWebsite = async (url) => {
  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
      },
    });

    const $ = cheerio.load(response.data);

    // Remove unwanted elements
    $("script").remove();
    $("style").remove();
    $("noscript").remove();

    const text = $("body").text();

    return text
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 5000);
  } catch (error) {
    console.error("❌ Scraper Error:", error.message);
    return "";
  }
};