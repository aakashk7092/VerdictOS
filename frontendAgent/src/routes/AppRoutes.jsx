import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Reports from "../pages/Reports";
import History from "../pages/History";
import Settings from "../pages/Settings";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Main Dashboard */}
      <Route path="/" element={<Dashboard />} />

      {/* Reports Page */}
      <Route path="/reports" element={<Reports />} />

      {/* History Page */}
      <Route path="/history" element={<History />} />

      {/* Settings Page */}
      <Route path="/settings" element={<Settings />} />

      {/* 404 Fallback */}
      <Route
        path="*"
        element={
          <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
            <div className="text-center">
              <h1 className="text-4xl font-bold">
                404
              </h1>
              <p className="mt-2 text-zinc-400">
                Page Not Found
              </p>
            </div>
          </div>
        }
      />

    </Routes>
  );
};

export default AppRoutes;