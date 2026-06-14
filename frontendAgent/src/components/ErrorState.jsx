import { AlertTriangle } from "lucide-react";

const ErrorState = ({ message }) => {
  if (!message) return null;

  return (
    <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-5 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-red-500/20 p-2">
          <AlertTriangle
            size={20}
            className="text-red-400"
          />
        </div>

        <h3 className="text-lg font-semibold text-red-400">
          Analysis Failed
        </h3>
      </div>

      <p className="mt-3 text-sm text-red-300">
        {message}
      </p>

      <p className="mt-2 text-xs text-zinc-400">
        Please try again or check backend
        connection.
      </p>
    </div>
  );
};

export default ErrorState;