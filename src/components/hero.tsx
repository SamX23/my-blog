import Image from "next/image";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ScrollToBottom from "./scrollToBottom";

type Props = {
  home?: boolean;
  name: string;
};

const useStyles = makeStyles({
  hero: {
    position: "relative",
    minHeight: "100vh",
    padding: "3em 1em",
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
    "& h1": {
      fontWeight: "bolder",
      fontSize: "3rem",
    },
  },

  hero__NotHome: {
    paddingTop: "2em",
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
          <Grid container className={classes.hero}>
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
                Hi! <span>👋</span> I&apos;m {name} a highly motivated
                self-taugh <span>🕸</span> developer.
              </Typography>
            </Grid>
            <ScrollToBottom />
          </Grid>
          <hr />
        </>
      ) : (
        <Box className={classes.hero__NotHome}>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/profile.jpg"
                className={classes.hero__images}
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
          <Typography variant="h2">{name}</Typography>
        </Box>
      )}
    </>
  );
};

export default Hero;
