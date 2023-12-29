import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import ScrollToBottom from "./scrollToBottom";
import TypedText from "./typed";

type Props = {
  home?: boolean;
  name: string;
};

const useStyles = makeStyles({
  hero: {
    position: "relative",
    minHeight: "100vh",
    padding: "3em .5em",
    display: "flex",

    "& div": {
      margin: "auto",
    },
  },

  hero__imagesContainer: {
    margin: "auto",
    padding: "2rem",
  },

  hero__images: {
    borderRadius: "25%",
  },

  hero__text: {
    margin: "auto",
    paddingLeft: "1em",
    minWidth: "19rem",
    "& h1": {
      fontWeight: "bolder",
      fontSize: "2em",
    },
    "@media(max-width: 700px)": {
      margin: "unset",
      "& h1": {
        fontSize: "1.5em",
      },
    },
  },

  hero__NotHome: {
    padding: "2em",
    textAlign: "center",
    "& h2": {
      fontSize: "2.5rem",
      fontWeight: "400",
      lineHeight: "1",
      margin: "1rem 0",
    },
  },
});

const Hero = ({ home, name }: Props) => {
  const classes = useStyles();

  return (
    <>
      {home ? (
        <>
          <Box className={classes.hero}>
            <Container>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item className={classes.hero__imagesContainer}>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    alt={name}
                    className={classes.hero__images}
                    width={250}
                    height={250}
                  />
                </Grid>
                <Grid item xs className={classes.hero__text}>
                  <Typography variant="h1">
                    <span>👋</span> {name}{" "}
                    <TypedText
                      arrayText={[
                        "a front-end developer",
                        "a tech-savvy",
                        "and a great father",
                      ]}
                    />
                    .
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <ScrollToBottom />
          </Box>
          <hr />
        </>
      ) : (
        <Box className={classes.hero__NotHome}>
          <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={classes.hero__images}
                height={108}
                width={108}
                alt={name}
              />
          </Link>
          <Typography variant="h2">{name}</Typography>
        </Box>
      )}
    </>
  );
};

export default Hero;
