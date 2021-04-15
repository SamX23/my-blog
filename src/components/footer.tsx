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
      "@media(max-width: 700px)": {
        textAlign: "center",
      },
    },
    footer_author: {
      paddingRight: "1em",
      "& span": {
        fontWeight: "bold",
      },
    },
    footer_sosmed: {
      textAlign: "right",
      "& a": {
        marginLeft: ".5em",
        fontWeight: "500",
      },
      "@media(max-width: 700px)": {
        borderLeft: "1px solid black",
        textAlign: "center",
        display: "grid",
        "& a": {
          margin: "unset",
        },
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
        <Grid item xs className={classes.footer_author}>
          Ngoding with{" "}
          <span role="img" aria-label="love">
            ♥️
          </span>{" "}
          by <span>Sami</span>
        </Grid>
        <Grid item xs className={classes.footer_sosmed}>
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
