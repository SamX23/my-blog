import Link from "next/link";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ProgressBar, ThemeButton } from "./index";

interface Props {
  blog?: boolean;
}

const useStyles = makeStyles({
  nav__Bar: {
    position: "fixed",
    width: "100%",
    zIndex: 1,
  },

  nav__Container: {
    position: "fixed",
    maxWidth: "1100px",
    margin: "auto",
    left: 0,
    right: 0,
    transition: "top 0.5s",
  },

  nav__Menu: {
    padding: ".5em",
    textAlign: "center",
    "& a": {
      fontWeight: 500,
    },
    "& button": {
      height: "3rem",
    },
  },
});

const Navigation = ({ blog }: Props) => {
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
    <>
      {!blog && (
        <nav className={classes.nav__Bar} id="navbar">
          <ProgressBar />
          <div
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
              <Grid item xs>
                <a href="https://github.com/samx23">Github</a>
              </Grid>
              {/* </Link> */}
              <Grid item xs>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </Grid>
              <Grid item xs={1}>
                <ThemeButton />
              </Grid>
            </Grid>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navigation;
