import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import verdictRoutes from "./routes/verdictRoutes.js";

dotenv.config();

const app = express();

// Environment Validation
console.log(
  "Gemini Key:",
  process.env.GEMINI_API_KEY ? "Loaded ✅" : "Missing ❌"
);

console.log(
  "Tavily Key:",
  process.env.TAVILY_API_KEY ? "Loaded ✅" : "Missing ❌"
);

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is missing in .env");
}

if (!process.env.TAVILY_API_KEY) {
  console.warn("⚠️ TAVILY_API_KEY missing. Research agents may not work.");
}

// Middleware
app.use(cors());

app.use(
  express.json({
    limit: "2mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Health Check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    service: "VerdictOS",
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/api/verdict", verdictRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl,
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 VerdictOS running on port ${PORT}`);
});