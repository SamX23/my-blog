"use client";

import { useCallback, useContext, useEffect } from "react";
import {
  darkColorPalette,
  lightColorPalette,
  ToggleThemeContext,
} from "../theme/theme";
import { Box } from "@mui/material";

const ProgressBar = () => {
  const { isDark } = useContext(ToggleThemeContext);

  const handleScroll = useCallback(() => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById("myBar");
    if (progressBar) {
      progressBar.style.width = `${scrolled}%`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Box
      sx={{
        width: "100%",
        height: 8,
      }}
    >
      <Box
        sx={{
          height: "inherit",
          background: isDark
            ? darkColorPalette.loadingBar
            : lightColorPalette.loadingBar,
          width: 0,
        }}
        id="myBar"
      />
    </Box>
  );
};

export default ProgressBar;
