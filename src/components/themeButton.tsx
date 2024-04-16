"use client";

import { useContext } from "react";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { ToggleThemeContext } from "../theme/theme";

const ThemeButton = () => {
  const { toggleTheme, isDark } = useContext(ToggleThemeContext);

  return (
    <Tooltip title="Toggle theme">
      <Button variant="text" onClick={toggleTheme}>
        {isDark ? <Brightness3Icon /> : <WbSunnyIcon />}
      </Button>
    </Tooltip>
  );
};

export default ThemeButton;
