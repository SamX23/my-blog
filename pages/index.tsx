import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../src/components/layout";
import Navigation from "../src/components/navigation";

const useStyles = makeStyles({
  typography: {
    padding: "1em 0",
    lineHeight: "2em",
  },
  container: {
    maxWidth: "45em",
    margin: "auto",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <Layout home>
      <Navigation />
      <section className={classes.container}>
        <Typography variant="h6" className={classes.typography}>
          A front-end web developer as hobbiest (yet), focusing on React tech
          stack and has developed some personal project on github. This blog is
          also created using <a href="https://nextjs.org/">Next</a> framework
          and <a href="https://www.typescriptlang.org/">Typescript</a>. You can
          see my project code on{" "}
          <a href="https://github.com/SamX23">Github Profile</a>. Thank you for
          coming 🙂
        </Typography>
      </section>
    </Layout>
  );
}
