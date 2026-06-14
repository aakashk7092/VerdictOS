import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { VerdictProvider } from "./context/VerdictContext";

const rootElement =
  document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "Root element not found"
  );
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <VerdictProvider>
        <App />
      </VerdictProvider>
    </BrowserRouter>
  </React.StrictMode>
);