import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  "@keyframes animate": {
    "0%": {
      opacity: 1,
      top: "29%",
    },
    "15%": {
      opacity: 1,
      top: "60%",
    },
    "50%": {
      opacity: 0,
      top: "60%",
    },
    "100%": {
      opacity: 0,
      top: "29%",
    },
  },

  scrollBtn: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: "1rem",
  },

  mouse: {
    position: "relative",
    display: "block",
    width: "35px",
    height: "55px",
    margin: "auto",
    border: "3px solid #0070f3",
    borderRadius: "23px",
  },

  mouseButton: {
    backgroundColor: "#0070f3",
    position: "absolute",
    display: "block",
    top: "29%",
    left: "50%",
    width: "8px",
    height: "8px",
    margin: "-4px 0 0 -4px",
    borderRadius: "50%",
    animation: `$animate 2000ms linear infinite`,
  },
});

const ScrollToBottom = () => {
  const classes = useStyles();
  return (
    <Box className={classes.scrollBtn}>
      <a
        href="#content"
        className={classes.mouse}
        aria-label="scroll to bottom"
      >
        <span className={classes.mouseButton}>&nbsp;</span>
      </a>
    </Box>
  );
};

export default ScrollToBottom;
