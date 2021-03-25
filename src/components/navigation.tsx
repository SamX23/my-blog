import Link from "next/link";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProgressBar from "./progressBar";
import ThemeButton from "./themeButton";

const useStyles = makeStyles({
  nav__Bar: {
    position: "fixed",
    width: "100%",
    zIndex: 1,
  },

  nav__Container: {
    position: "fixed",
    maxWidth: "1100px",
    width: "100%",
    margin: "auto",
    left: 0,
    right: 0,
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

const Navigation = () => {
  const classes = useStyles();
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
    <nav className={classes.nav__Bar} id="navbar">
      <ProgressBar />
      <div
        className={classes.nav__Container}
        style={{ top: visible ? "0" : "-60px" }}
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
          <ThemeButton />
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
