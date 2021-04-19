import { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Layout from "../src/components/layout";
import { darkColorPalette, lightColorPalette } from "../src/theme/theme";
import { ToggleThemeContext } from "../src/theme/themeProvider";
import { project } from "../src/mock/data";

const useStyles = makeStyles({
  typography: {
    lineHeight: "2em",
    fontSize: "1.5rem",
    padding: "1rem",
  },
  container: {
    margin: "auto",
    padding: "1rem 0",
    minHeight: "90vh",
  },
  gridList: {
    textAlign: "center",
  },
  gridItem: {
    padding: ".25rem",
  },
});

const Home = () => {
  const classes = useStyles();
  const { isDark } = useContext(ToggleThemeContext);
  const cardTheme = isDark ? darkColorPalette.repo : lightColorPalette.repo;

  return (
    <>
      <Layout home>
        <Grid container className={classes.container}>
          <Grid item>
            <Typography
              variant="body1"
              className={classes.typography}
              id="content"
            >
              A web developer as hobbiest (yet) specialize on front-end, loving
              the most fast paced tech stack on earth,{" "}
              <a href="https://reactjs.org/">React</a>. I have developed many
              personal project on github, notes that this blog is also my
              project created using <a href="https://nextjs.org/">Next</a> and{" "}
              <a href="https://www.typescriptlang.org/">Typescript</a>. Take a
              look on my project on{" "}
              <a href="https://github.com/SamX23">Github Profile</a>.
            </Typography>
          </Grid>
          <Grid container item className={classes.gridList}>
            <Grid item>
              <Box borderBottom={2} mb={2}>
                <Typography variant="body1" className={classes.typography}>
                  My recent project list:
                </Typography>
              </Box>
              {project.repo.map((res) => (
                <a key={res.id} href={res.link} className={classes.gridItem}>
                  <img
                    alt={res.name}
                    src={project.githubLink(res.repo, cardTheme)}
                  />
                </a>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
