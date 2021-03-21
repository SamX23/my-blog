import { Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { ToggleThemeContext } from "../theme/themeProvider";

const useStyles = makeStyles({
  nav__Bar: {
    position: "fixed",
    top: 0,
    width: "100%",
    maxWidth: "1100px",
    transition: "top 0.5s",
  },

  nav__Menu: {
    display: "grid",
    listStyle: "none",
    gridTemplateColumns: "2fr 2fr 1fr",
    padding: "1em 0",
    margin: 0,
    "& a": {
      width: "100%",
      textAlign: "center",
      fontWeight: 500,
      "&:hover": {
        color: "black",
      },
    },
    "& button": {
      padding: 0,
      width: "50%",
    },
  },
});

export default function Navigation() {
  const classes = useStyles();
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
      className={classes.nav__Bar}
      id="navbar"
    >
      <ul className={classes.nav__Menu}>
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
