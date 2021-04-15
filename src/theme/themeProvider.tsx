import { Theme } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { darkTheme, lightTheme } from "./theme";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ToggleThemeContext = createContext({
  toggleTheme: () => {},
  isDark: false,
});

type SelectedTheme = {
  themeName: string;
  appliedTheme: Theme;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [selectedTheme, setSelectedTheme] = useState<SelectedTheme>({
    appliedTheme: darkTheme,
    themeName: "darkTheme",
  });

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme && theme === "lightTheme") {
      setSelectedTheme({ appliedTheme: lightTheme, themeName: "lightTheme" });
    }
  }, []);

  const toggleTheme = useCallback(() => {
    if (!selectedTheme || selectedTheme.themeName === "darkTheme") {
      setSelectedTheme({ appliedTheme: lightTheme, themeName: "lightTheme" });
      localStorage.setItem("theme", "lightTheme");
    } else {
      setSelectedTheme({ appliedTheme: darkTheme, themeName: "darkTheme" });
      localStorage.setItem("theme", "darkTheme");
    }
  }, [selectedTheme, setSelectedTheme]);

  return (
    <ToggleThemeContext.Provider
      value={{
        toggleTheme,
        isDark: !(selectedTheme.themeName === "darkTheme"),
      }}
    >
      <MuiThemeProvider theme={selectedTheme.appliedTheme}>
        {children}
      </MuiThemeProvider>
    </ToggleThemeContext.Provider>
  );
};
