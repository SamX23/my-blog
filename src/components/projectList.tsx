import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { ToggleThemeContext } from "../theme/themeProvider";
import { darkColorPalette, lightColorPalette } from "../theme/theme";
import { project } from "../mock/data";

const useStyles = makeStyles({
  typography: {
    lineHeight: "2em",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "justify",
  },
  gridList: {
    textAlign: "center",
  },
  gridItem: {
    padding: ".25rem",
    "@media(max-width: 440px)": {
      "& img": {
        maxWidth: "20rem",
      },
    },
  },
  projectVariant: {
    textAlign: "center",
    fontSize: 25,
    margin: "1rem 0",
  },
});

const ProjectList = () => {
  const classes = useStyles();
  const { isDark } = useContext(ToggleThemeContext);
  const cardTheme = isDark ? darkColorPalette.repo : lightColorPalette.repo;

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h3" className={classes.typography}>
          PROJECT LIST:
        </Typography>
        <hr />
      </Grid>

      <Grid item>
        <Typography variant="h3" className={classes.projectVariant}>
          NEXT JS
        </Typography>
        <Box className={classes.gridList}>
          {project.repo
            .filter((x) => x.tech === "nextjs")
            .map((res) => (
              <a key={res.id} href={res.link} className={classes.gridItem}>
                <img
                  alt={res.name}
                  src={project.githubLink(res.repo, cardTheme)}
                />
              </a>
            ))}
        </Box>
      </Grid>

      <Grid item>
        <Typography variant="h3" className={classes.projectVariant}>
          PURE REACT
        </Typography>
        <Box className={classes.gridList}>
          {project.repo
            .filter((x) => x.tech === "react")
            .map((res) => (
              <a key={res.id} href={res.link} className={classes.gridItem}>
                <img
                  alt={res.name}
                  src={project.githubLink(res.repo, cardTheme)}
                />
              </a>
            ))}
        </Box>
      </Grid>

      <Grid item>
        <Typography variant="h3" className={classes.projectVariant}>
          HTML5, CSS3 and JS
        </Typography>
        <Box className={classes.gridList}>
          {project.repo
            .filter((x) => x.tech === "htmlcssjs")
            .map((res) => (
              <a key={res.id} href={res.link} className={classes.gridItem}>
                <img
                  alt={res.name}
                  src={project.githubLink(res.repo, cardTheme)}
                />
              </a>
            ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProjectList;
