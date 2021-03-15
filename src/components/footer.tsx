import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    margin: "1em 0",
  },
  footer_Bar: {
    borderTop: "0.2em solid #e9e0ff",
    paddingTop: "1em",
  },
  footer_text: {},
  footer_sosmed: {
    "> a": {
      marginRight: ".5em",
    },
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Grid
        className={classes.footer_Bar}
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item className={classes.footer_text}>
          Ngoding with{" "}
          <span role="img" aria-label="love">
            ♥️
          </span>{" "}
          by <a href="https://kalamallah.xyz"> Sami</a>
        </Grid>

        <Grid item className={classes.footer_sosmed}>
          <a href="https://web.facebook.com/SamiKalamallah">Facebook</a>
          <a href="https://web.facebook.com/SamiKalamallah">Instagram</a>
          <a href="https://web.facebook.com/SamiKalamallah">WhatsApp</a>
        </Grid>
      </Grid>
    </footer>
  );
}
