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
    padding: "1rem",
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
});

const ProjectList = () => {
  const classes = useStyles();
  const { isDark } = useContext(ToggleThemeContext);
  const cardTheme = isDark ? darkColorPalette.repo : lightColorPalette.repo;

  return (
    <Grid container className={classes.gridList}>
      <Grid item>
        <Box borderBottom={2} mb={2}>
          <Typography variant="body1" className={classes.typography}>
            My recent project list:
          </Typography>
        </Box>
        {project.repo.map((res) => (
          <a key={res.id} href={res.link} className={classes.gridItem}>
            <img alt={res.name} src={project.githubLink(res.repo, cardTheme)} />
          </a>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProjectList;
