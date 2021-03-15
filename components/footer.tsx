import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

export default function Footer() {
  const useStyles = makeStyles({
    footer_Bar: {
      borderTop: "0.2em solid #e9e0ff",
      paddingTop: "2em",
      margin: "auto",
      alignContent: "space-around",
    },
  });

  const classes = useStyles();
  return (
    <footer>
      <Grid className={classes.footer_Bar} container>
        <Grid>
          Ngoding with{" "}
          <span role="img" aria-label="love">
            ♥️
          </span>{" "}
          by <a href="https://kalamallah.xyz"> Sami</a>
        </Grid>

        {/* <Grid item>
          <a href="https://web.facebook.com/SamiKalamallah">Facebook</a>
        </Grid> */}
      </Grid>
    </footer>
  );
}
