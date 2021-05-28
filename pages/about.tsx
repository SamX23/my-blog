import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Layout as Main, ProjectList } from "../src/components";
import EmbedPdf from "../src/components/pdfEmbed";

const useStyles = makeStyles({
  container: {
    padding: "1.5rem 0",
  },

  baseCover: {
    width: "100%",
    minHeight: "40rem",
    backgroundColor: "blue",
    "& > div": {
      minHeight: "inherit",
    },
  },

  baseCoverImage: {
    width: "100%",
    height: "25rem",
    position: "relative",
    background: "red",
    borderRadius: "0 0 1rem 1rem",
    "& img": {
      width: "15rem",
      border: ".5rem solid white",
      borderRadius: "50%",
      objectFit: "cover",
      position: "absolute",
      left: "50%",
      bottom: "-7.5rem",
      transform: "translatex(-7.5rem)",
    },
  },

  gridCover: {
    display: "grid",
    gridTemplateRows: "repeat(3, 5rem)",
    gridGap: "1rem",
    justifyItems: "center",
    padding: "1rem 1rem",
  },
});

const about = () => {
  const aboutPage = "CV and Portfolio of Sami";
  const classes = useStyles();

  return (
    <Main noContainer noHero siteTitle={aboutPage}>
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.baseCover}>
            <Container>
              <Box className={classes.baseCoverImage}>
                <img src="/images/profile.jpg" alt="profile" />
              </Box>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={6} className={classes.gridCover}>
                  <button type="submit">test1</button>
                  <button type="submit">test1</button>
                  <button type="submit">test1</button>
                </Grid>
                <Grid item xs={6} className={classes.gridCover}>
                  <button type="submit">test1</button>
                  <button type="submit">test1</button>
                  <button type="submit">test1</button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Container>
            <Typography variant="body1">
              <Box p={2} textAlign="justify">
                Hi, my name is Sami Kalammallah, some of you may find me on
                internet as Sami Kalamallah (with single m), that&apos;s because
                I use my false letter name long time without realise to fix it.
                So, I officialy use my true names after I get married and having
                kids.
              </Box>
            </Typography>

            <ProjectList />
            <EmbedPdf />
          </Container>
        </Grid>
      </Grid>
    </Main>
  );
};

export default about;
