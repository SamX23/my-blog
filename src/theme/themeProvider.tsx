import { Theme } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { createContext, useCallback, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./theme";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

interface childrenProps {
  children: React.ReactNode;
}

type SelectedTheme = {
  themeName: string;
  appliedTheme: Theme;
};

export const ToggleThemeContext = createContext({
  toggleTheme: () => {},
  isDark: false,
});

export const ThemeProvider = ({ children }: childrenProps) => {
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
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={selectedTheme.appliedTheme}>
          {children}
        </MuiThemeProvider>
      </StyledEngineProvider>
    </ToggleThemeContext.Provider>
  );
};
