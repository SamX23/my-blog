import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { ProgressBar, ThemeButton } from "./index";
import { ToggleThemeContext } from "../theme/themeProvider";
import { darkColorPalette, lightColorPalette } from "../theme/theme";

interface Props {
  disable?: boolean;
}

const Navigation = ({ disable }: Props) => {
  const { isDark } = useContext(ToggleThemeContext);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const useStyles = makeStyles({
    nav__Bar: {
      position: "fixed",
      width: "100%",
      zIndex: 1,
    },

    nav__Container: {
      position: "fixed",
      left: 0,
      right: 0,
      transition: "top 0.5s",
    },

    nav__Menu: {
      padding: ".5em",
      textAlign: "center",
      width: "100%",
      "& a": {
        fontWeight: 500,
      },
      "& button": {
        width: "100%",
        height: "3rem",
        backgroundColor: isDark
          ? darkColorPalette.secondary
          : lightColorPalette.secondary,
        "&:hover": {
          backgroundColor: isDark
            ? darkColorPalette.secondary
            : lightColorPalette.secondary,
          opacity: ".8",
        },
      },
    },
  });

  const classes = useStyles();

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
    <>
      {!disable && (
        <nav className={classes.nav__Bar} id="navbar">
          <ProgressBar />
          <Container
            className={classes.nav__Container}
            style={{ top: visible ? "0" : "-60px" }}
          >
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.nav__Menu}
            >
              {/* <Link href="/github"> */}
              <Grid item xs={5}>
                <a href="https://github.com/samx23">Github</a>
              </Grid>
              {/* </Link> */}
              <Grid item xs={5}>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </Grid>
              <Grid item xs={2}>
                <ThemeButton />
              </Grid>
            </Grid>
          </Container>
        </nav>
      )}
    </>
  );
};

export default Navigation;
