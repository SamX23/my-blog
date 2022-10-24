import { makeStyles } from "@material-ui/core/styles";
import { useCallback, useContext, useEffect } from "react";
import { darkColorPalette, lightColorPalette } from "../theme/theme";
import { ToggleThemeContext } from "../theme/themeProvider";

const ProgressBar = () => {
  const { isDark } = useContext(ToggleThemeContext);
  const useStyles = makeStyles({
    progressContainer: {
      width: "100%",
      height: 8,
    },

    progressBar: {
      height: "inherit",
      background: isDark
        ? darkColorPalette.loadingBar
        : lightColorPalette.loadingBar,
      width: 0,
    },
  });

  const classes = useStyles();
  const handleScroll = useCallback(() => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = `${scrolled}%`;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className={classes.progressContainer}>
      <div className={classes.progressBar} id="myBar" />
    </div>
  );
};

export default ProgressBar;
