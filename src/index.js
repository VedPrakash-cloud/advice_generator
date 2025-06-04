import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// root.render(<Counter c={10} steps={5} />);

root.render(
  <>
    <App />
  </>
);
