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
    minHeight: "30rem",
    "& > div": {
      minHeight: "inherit",
    },
  },

  baseCoverImage: {
    width: "100%",
    height: "25rem",
    position: "relative",
    backgroundImage: "url('/images/profile-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
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
    gridTemplateRows: "repeat(3, 2rem)",
    gridGap: "1rem",
    justifyItems: "center",
    padding: "1rem 1rem",
  },
  profileText: {
    textAlign: "justify",
  },
});

const about = () => {
  const aboutPage = "About Sami";
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
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={6} className={classes.gridCover} />
                <Grid item xs={6} className={classes.gridCover} />
              </Grid>
            </Container>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Container>
            <Box py={2} className={classes.profileText}>
              <Typography variant="h4">
                Hi, my name is Sami Kalammallah and that's all you need to know
              </Typography>
            </Box>
            <ProjectList />
          </Container>
        </Grid>
      </Grid>
    </Main>
  );
};

export default about;
