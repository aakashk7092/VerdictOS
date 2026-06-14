import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  History,
  Settings,
  Brain,
  Sparkles,
} from "lucide-react";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
      isActive
        ? "bg-blue-600 text-white shadow-lg"
        : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
    }`;

  return (
    <aside className="w-64 min-h-screen border-r border-zinc-800 bg-zinc-950 p-4">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3 px-2">
        <div className="rounded-xl bg-blue-500/10 p-2">
          <Brain className="text-blue-400" size={20} />
        </div>

        <div>
          <h1 className="text-lg font-bold text-white">
            VerdictOS
          </h1>

          <p className="text-xs text-zinc-500">
            AI Boardroom
          </p>
        </div>
      </div>

      {/* Status */}
      <div className="mb-6 flex items-center gap-2 rounded-lg bg-green-500/10 px-3 py-2 text-xs text-green-400">
        <Sparkles size={14} />
        AI Agents Active
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <NavLink to="/" className={linkClass}>
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink to="/reports" className={linkClass}>
          <BarChart3 size={20} />
          Reports
        </NavLink>

        <NavLink to="/history" className={linkClass}>
          <History size={20} />
          History
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          <Settings size={20} />
          Settings
        </NavLink>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-4 text-xs text-zinc-600">
        VerdictOS v1.0
      </div>
    </aside>
  );
};

export default Sidebar;