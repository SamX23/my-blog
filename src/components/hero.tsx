import Image from "next/image";
import Link from "next/link";
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
    display: "grid",
    padding: "3em 1em",
    borderBottom: "2px solid #272341",
  },

  hero__container: {
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
  },

  hero__imagesContainer: {
    margin: "auto",
  },

  hero__images: {
    borderRadius: "999px",
  },

  hero__text: {
    margin: "auto",
    fontWeight: "bolder",
    paddingLeft: "1em",
  },

  hero__NotHome: {
    paddingTop: "2em",
    textAlign: "center",
    "& h2": {
      fontSize: "1.5rem",
      lineHeight: "1.4",
      margin: "1rem 0",
    },
  },
});

const Hero = ({ home, name }: Props) => {
  const classes = useStyles();

  return (
    <>
      {home ? (
        <div className={classes.hero}>
          <div className={classes.hero__container}>
            <div className={classes.hero__imagesContainer}>
              <Image
                priority
                src="/images/profile.jpg"
                alt={name}
                className={classes.hero__images}
                width={250}
                height={250}
              />
            </div>
            <div className={classes.hero__text}>
              <h1 color="secondary">
                Yo! I&apos;m {name} a highly motivated self-taugh programmer.
              </h1>
            </div>
            <ScrollToBottom />
          </div>
        </div>
      ) : (
        <div className={classes.hero__NotHome}>
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
          <h2>{name}</h2>
        </div>
      )}
    </>
  );
};

export default Hero;
