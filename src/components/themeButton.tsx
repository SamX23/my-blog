import { useContext } from "react";
import { Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { ToggleThemeContext } from "../theme/themeProvider";

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
