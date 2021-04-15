import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { socialMedia } from "../mock/data";

const Footer = () => {
  const useStyles = makeStyles({
    root: {
      borderTop: "0.1em solid #272341",
    },
    footer_Bar: {
      padding: "1em",
    },
    footer_author: {
      fontWeight: "bold",
    },
    footer_sosmed: {
      "& a": {
        marginLeft: ".5em",
        fontWeight: "500",
      },
    },
  });
  const classes = useStyles();

  return (
    <footer className={classes.root} id="footer">
      <Grid
        className={classes.footer_Bar}
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          Ngoding with{" "}
          <span role="img" aria-label="love">
            ♥️
          </span>{" "}
          by <span className={classes.footer_author}>Sami</span>
        </Grid>
        <Grid item className={classes.footer_sosmed}>
          {socialMedia.networks.map((item) => (
            <a key={item.id} href={item.url}>
              {item.name}
            </a>
          ))}
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
