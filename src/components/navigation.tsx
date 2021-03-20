import { Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import navigation from "../../styles/navigation.module.css";
import { ToggleThemeContext } from "../theme/themeProvider";

export default function Navigation() {
  const { toggleTheme, isDark } = useContext(ToggleThemeContext);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav
      style={{ top: visible ? "0" : "-60px" }}
      className={navigation.nav__Bar}
      id="navbar"
    >
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
