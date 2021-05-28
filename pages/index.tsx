import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Layout } from "../src/components/index";

const useStyles = makeStyles({
  typography: {
    lineHeight: "2em",
    fontSize: "1.5rem",
    padding: "1rem",
    textAlign: "justify",
  },
  container: {
    margin: "auto",
    padding: "1rem 0",
  },
});

const Home = () => {
  const classes = useStyles();

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
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
