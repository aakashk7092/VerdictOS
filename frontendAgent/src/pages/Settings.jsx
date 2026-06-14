import MainLayout from "../layouts/MainLayout";
import { useState } from "react";

const Settings = () => {
  const [apiKey, setApiKey] = useState("");
  const [theme, setTheme] = useState("dark");

  const handleSave = () => {
    localStorage.setItem("verdict_api_key", apiKey);
    localStorage.setItem("verdict_theme", theme);

    alert("Settings saved successfully 🚀");
  };

  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-white">
            Settings
          </h1>

          <p className="mt-2 text-zinc-400">
            Configure VerdictOS preferences and system behavior.
          </p>
        </div>

        {/* API Key */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-bold text-white mb-4">
            🔑 API Configuration
          </h2>

          <input
            type="text"
            placeholder="Enter Gemini / Backend API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4 text-white outline-none focus:border-blue-500"
          />

          <p className="mt-2 text-sm text-zinc-500">
            Used for AI agent analysis and backend communication
          </p>
        </div>

        {/* Theme */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-bold text-white mb-4">
            🎨 Theme Settings
          </h2>

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4 text-white outline-none"
          >
            <option value="dark">Dark Mode</option>
            <option value="light">Light Mode (Coming Soon)</option>
          </select>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
        >
          Save Settings
        </button>

      </div>
    </MainLayout>
  );
};

export default Settings;