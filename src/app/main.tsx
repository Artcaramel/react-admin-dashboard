import "@/styles/theme.css";
import "@/styles/globals.css";
import "@/styles/tailwind.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { AppProvider } from "./providers/AppProvider.tsx";

const theme = localStorage.getItem("theme") || "light";
document.documentElement.classList.toggle("dark", theme === "dark");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
