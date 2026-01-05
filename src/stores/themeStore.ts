import { create } from "zustand";

export type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
};

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: (localStorage.getItem("theme") as Theme) || "light",

  setTheme: (theme) => {
    applyTheme(theme);
    set({ theme });
  },

  toggleTheme: () => {
    const next = get().theme === "light" ? "dark" : "light";
    applyTheme(next);
    set({ theme: next });
  },
}));
