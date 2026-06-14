import { Brain, Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-500/10 p-2">
            <Brain className="text-blue-400" size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              VerdictOS
            </h1>
            <p className="text-xs text-zinc-400">
              AI Startup Boardroom
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Status Badge */}
          <div className="hidden items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 md:flex">
            <Sparkles size={14} className="text-green-400 animate-pulse" />
            <span className="text-xs text-green-400">
              AI Agents Online
            </span>
          </div>

          {/* Nav Links (future ready) */}
          <button className="rounded-xl bg-zinc-900 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 transition">
            Dashboard
          </button>

          <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">
            New Analysis
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;