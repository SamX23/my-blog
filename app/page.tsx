import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Layout from "../src/components/layout";

const Home = () => (
  <Layout home>
    <Grid
      container
      sx={{
        margin: "auto",
        padding: "1rem 0",
      }}
    >
      <Grid item>
        <Typography
          variant="body1"
          sx={{
            lineHeight: "2em",
            fontSize: "1.5rem",
            padding: "1rem",
            textAlign: "justify",
          }}
          id="content"
        >
          As a dedicated Software Engineer specializing in frontend development,
          I am particularly drawn to the dynamic and fast-paced world of
          technology, with{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            React
          </a>{" "}
          as my primary focus. I derive immense satisfaction from coding,
          engaging in gaming pursuits, and fulfilling my responsibilities as a
          father. The creation of this blog is a testament to my proficiency in
          utilizing{" "}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            Next Js
          </a>{" "}
          and{" "}
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            Typescript
          </a>
          . Feel free to explore my personal projects on{" "}
          <Link href="/about">Github</Link> for a deeper insight into my coding
          endeavors.
        </Typography>
      </Grid>
    </Grid>
  </Layout>
);

export default Home;
