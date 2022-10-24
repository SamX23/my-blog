import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Layout } from "../src/components/index";
import Link from "next/link";

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
    <Layout home>
      <Grid container className={classes.container}>
        <Grid item>
          <Typography
            variant="body1"
            className={classes.typography}
            id="content"
          >
            Currently a Software Engineer focused on frontend role, loving the
            most fast paced tech stack on earth,{" "}
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              React
            </a>
            . Found my self enjoy coding, playing games and being a father, this
            blog is created using{" "}
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              Next
            </a>{" "}
            and{" "}
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              Typescript
            </a>
            . Checkout my personal project on <Link href="/about">Github</Link>.
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
