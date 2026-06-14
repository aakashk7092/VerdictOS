import { useContext } from "react";
import { VerdictContext } from "../context/VerdictContext";
import { analyzeStartup } from "../services/verdictApi";

const useAnalyzeStartup = () => {
  const {
    setResult,
    setLoading,
    setError,
  } = useContext(VerdictContext);

  const analyze = async (idea) => {
    if (!idea || !idea.trim()) {
      setError("Please enter a valid startup idea");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // reset previous result for clean UX
      setResult(null);

      const data = await analyzeStartup({
        idea,
      });

      // safety check
      if (!data) {
        throw new Error(
          "No response from server"
        );
      }

      setResult(data);
    } catch (error) {
      console.error("Analyze Error:", error);

      setError(
        error?.response?.data?.error ||
          error?.message ||
          "Something went wrong while analyzing startup"
      );
    } finally {
      setLoading(false);
    }
  };

  return { analyze };
};

export default useAnalyzeStartup;