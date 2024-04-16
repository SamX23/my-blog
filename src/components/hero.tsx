import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ScrollToBottom from "./scrollToBottom";
import TypedText from "./typed";

type Props = {
  home?: boolean;
  name: string;
};

const Hero = ({ home, name }: Props) => (
  <>
    {home ? (
      <>
        <Box
          sx={{
            position: "relative",
            minHeight: "calc(100vh - 60px)",
            display: "flex",
            "& div": {
              margin: "auto",
            },
          }}
        >
          <Container>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                sx={{
                  margin: "auto",
                  padding: "2rem",
                }}
              >
                <Image
                  priority
                  src="/images/profile.jpg"
                  alt={name}
                  style={{
                    borderRadius: "25%",
                  }}
                  width={250}
                  height={250}
                />
              </Grid>
              <Grid
                item
                xs
                sx={{
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
                }}
              >
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
      <Box
        sx={{
          padding: "2em",
          textAlign: "center",
          "& h2": {
            fontSize: "2.5rem",
            fontWeight: "400",
            lineHeight: "1",
            margin: "1rem 0",
          },
        }}
      >
        <Link href="/">
          <Image
            priority
            src="/images/profile.jpg"
            style={{
              borderRadius: "25%",
            }}
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

export default Hero;
