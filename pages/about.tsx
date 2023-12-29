import makeStyles from "@mui/styles/makeStyles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Layout as Main, ProjectList } from "../src/components";
import EmbedPdf from "../src/components/pdfEmbed";
import Image from "next/image";

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

const About = () => {
  const aboutPage = "About Sami";
  const classes = useStyles();

  return (
    <Main noContainer noHero siteTitle={aboutPage}>
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.baseCover}>
            <Container>
              <Box className={classes.baseCoverImage}>
                <Image
                  src="/images/profile.jpg"
                  alt="profile"
                  width={300}
                  height={250}
                />
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
                Hi, my name is Sami Kalammallah and that&apos;s all you need to
                know.
              </Typography>
            </Box>
            <ProjectList />
          </Container>
        </Grid>
      </Grid>
    </Main>
  );
};

export default About;
