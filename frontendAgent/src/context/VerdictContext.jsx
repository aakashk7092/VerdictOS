import {
  createContext,
  useState,
} from "react";

export const VerdictContext =
  createContext();

export const VerdictProvider = ({
  children,
}) => {
  const [result, setResult] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState(null);

  const resetState = () => {
    setResult(null);
    setError(null);
    setLoading(false);
  };

  return (
    <VerdictContext.Provider
      value={{
        result,
        setResult,

        loading,
        setLoading,

        error,
        setError,

        resetState,
      }}
    >
      {children}
    </VerdictContext.Provider>
  );
};