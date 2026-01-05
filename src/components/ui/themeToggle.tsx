import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/stores/themeStore";

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 group-data-[collapsible=icon]:hidden"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
