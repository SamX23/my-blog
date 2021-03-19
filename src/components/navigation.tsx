import { Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "next/link";
import { useContext } from "react";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import navigation from "../../styles/navigation.module.css";
import { ToggleThemeContext } from "../theme/themeProvider";

export default function Navigation() {
  const { toggleTheme, isDark } = useContext(ToggleThemeContext);

  return (
    <nav className={navigation.nav__Bar}>
      <ul className={navigation.nav__Menu}>
        <Link href="/github">
          <a>
            <li>Github</li>
          </a>
        </Link>
        <Link href="/blog">
          <a>
            <li>Blog</li>
          </a>
        </Link>
        <Tooltip title="Toggle Theme">
          <Button variant="text" onClick={toggleTheme}>
            {isDark ? <WbSunnyIcon /> : <Brightness3Icon />}
          </Button>
        </Tooltip>
      </ul>
    </nav>
  );
}
