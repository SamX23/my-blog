import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Layout, ProjectList } from "../src/components";
import EmbedPdf from "../src/components/pdfEmbed";

const useStyles = makeStyles({
  container: {
    padding: "1.5rem 0",
  },
});

const about = () => {
  const aboutPage = "CV and Portfolio of Sami";
  const classes = useStyles();

  return (
    <Layout noHero siteTitle={aboutPage}>
      <Box mt={3}>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Typography variant="h1">
              <Box textAlign="center" borderBottom={2} pb={2}>
                About Page
              </Box>
            </Typography>
            <Typography variant="body1">
              <Box p={2} textAlign="justify">
                Hi, my name is Sami Kalammallah, some of you may find me on the
                internet as Sami Kalamallah (with single m), that&apos;s because
                I use my false letter name long time without realizing to fix
                it. So, I officially use my true names after I got married.
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ProjectList />
          </Grid>
          <Grid item xs={12}>
            <EmbedPdf />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default about;
