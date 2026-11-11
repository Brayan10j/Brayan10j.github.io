import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<"light" | "dark" | "system">("dark");

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    const stored = typeof localStorage !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored === "light" || stored === "dark" || stored === "system") {
      setThemeState(stored as "light" | "dark" | "system");
    } else {
      setThemeState(isDarkMode ? "dark" : "light");
    }
  }, []);

  const changeTheme = (newTheme: "light" | "dark" | "system") => {
    setThemeState(newTheme);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
    const isDark =
      newTheme === "dark" ||
      (newTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Toggle theme">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => changeTheme("light")}
          className={theme === "light" ? "font-semibold bg-accent" : ""}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeTheme("dark")}
          className={theme === "dark" ? "font-semibold bg-accent" : ""}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeTheme("system")}
          className={theme === "system" ? "font-semibold bg-accent" : ""}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
