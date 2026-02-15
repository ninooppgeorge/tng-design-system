import * as React from "react";

export type AccentColor = "blue" | "purple" | "red" | "green" | "orange" | "pink" | "teal";
export type ThemeMode = "light" | "dark" | "system";

export interface ThemeContextValue {
  theme: ThemeMode;
  resolvedTheme: "light" | "dark";
  accentColor: AccentColor;
  setTheme: (theme: ThemeMode) => void;
  setAccentColor: (color: AccentColor) => void;
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeMode;
  defaultAccent?: AccentColor;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultAccent = "blue",
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<ThemeMode>(defaultTheme);
  const [accentColor, setAccentColor] = React.useState<AccentColor>(defaultAccent);
  const [systemTheme, setSystemTheme] = React.useState<"light" | "dark">(getSystemTheme);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setSystemTheme(e.matches ? "dark" : "light");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const resolvedTheme = theme === "system" ? systemTheme : theme;

  const value = React.useMemo<ThemeContextValue>(
    () => ({ theme, resolvedTheme, accentColor, setTheme, setAccentColor }),
    [theme, resolvedTheme, accentColor],
  );

  return (
    <ThemeContext.Provider value={value}>
      <div
        className="tng-root"
        data-tng-theme={resolvedTheme}
        data-tng-accent={accentColor}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a <ThemeProvider>");
  return ctx;
}
