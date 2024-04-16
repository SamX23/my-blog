import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Layout as Main, ProjectList } from "../../src/components";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sami",
  openGraph: {
    title: "About Sami",
  },
};

const About = () => (
  <Main noContainer noHero>
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            width: "100%",
            minHeight: "30rem",
            "& > div": {
              minHeight: "inherit",
            },
          }}
        >
          <Container>
            <Box
              sx={{
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
              }}
            >
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
              <Grid
                item
                xs={6}
                sx={{
                  display: "grid",
                  gridTemplateRows: "repeat(3, 2rem)",
                  gridGap: "1rem",
                  justifyItems: "center",
                  padding: "1rem 1rem",
                }}
              />
              <Grid
                item
                xs={6}
                sx={{
                  display: "grid",
                  gridTemplateRows: "repeat(3, 2rem)",
                  gridGap: "1rem",
                  justifyItems: "center",
                  padding: "1rem 1rem",
                }}
              />
            </Grid>
          </Container>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Box
            py={2}
            sx={{
              textAlign: "justify",
            }}
          >
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

export default About;
