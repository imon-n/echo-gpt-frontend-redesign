import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined);

interface Props {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("echogpt-theme");

    return savedTheme === "dark" ? "light" : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("echogpt-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}