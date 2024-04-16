"use client";

import { Theme } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { useCallback, useEffect, useState } from "react";
import { darkTheme, lightTheme, ToggleThemeContext } from "./theme";

interface childrenProps {
  children: React.ReactNode;
}

type SelectedTheme = {
  themeName: string;
  appliedTheme: Theme;
};

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
      <MuiThemeProvider theme={selectedTheme.appliedTheme}>
        {children}
      </MuiThemeProvider>
    </ToggleThemeContext.Provider>
  );
};
