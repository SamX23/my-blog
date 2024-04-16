"use client";

import { useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  darkColorPalette,
  lightColorPalette,
  ToggleThemeContext,
} from "../theme/theme";
import { project } from "../constant/data";
import Image from "next/image";
import Link from "@mui/material/Link";

const ProjectList = () => {
  const { isDark } = useContext(ToggleThemeContext);
  const cardTheme = isDark ? darkColorPalette.repo : lightColorPalette.repo;

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
          variant="h3"
          sx={{
            lineHeight: "2em",
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "justify",
          }}
        >
          PROJECT LIST:
        </Typography>
        <hr />
      </Grid>

      <Grid item>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontSize: 25,
            margin: "1rem 0",
          }}
        >
          NEXT JS
        </Typography>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          {project.repo
            .filter((x) => x.tech === "nextjs")
            .map((res) => (
              <Link
                key={res.id}
                href={res.link}
                sx={{
                  padding: ".25rem",
                  "@media(max-width: 440px)": {
                    "& img": {
                      maxWidth: "20rem",
                    },
                  },
                }}
              >
                <Image
                  width={325}
                  height={100}
                  style={{
                    width: "325px",
                    height: "100%",
                  }}
                  alt={res.name}
                  src={project.githubLink(res.repo, cardTheme)}
                />
              </Link>
            ))}
        </Box>
      </Grid>

      <Grid item>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontSize: 25,
            margin: "1rem 0",
          }}
        >
          PURE REACT
        </Typography>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          {project.repo
            .filter((x) => x.tech === "react")
            .map((res) => (
              <Link
                key={res.id}
                href={res.link}
                sx={{
                  padding: ".25rem",
                  "@media(max-width: 440px)": {
                    "& img": {
                      maxWidth: "20rem",
                    },
                  },
                }}
              >
                <Image
                  width={325}
                  height={100}
                  style={{
                    width: "325px",
                    height: "100%",
                  }}
                  alt={res.name}
                  src={project.githubLink(res.repo, cardTheme)}
                />
              </Link>
            ))}
        </Box>
      </Grid>

      <Grid item>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontSize: 25,
            margin: "1rem 0",
          }}
        >
          HTML5, CSS3 and JS
        </Typography>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          {project.repo
            .filter((x) => x.tech === "htmlcssjs")
            .map((res) => (
              <Link
                key={res.id}
                href={res.link}
                sx={{
                  padding: ".25rem",
                  "@media(max-width: 440px)": {
                    "& img": {
                      maxWidth: "20rem",
                    },
                  },
                }}
              >
                <Image
                  width={325}
                  height={100}
                  style={{
                    width: "325px",
                    height: "100%",
                  }}
                  alt={res.name}
                  src={project.githubLink(res.repo, cardTheme)}
                />
              </Link>
            ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProjectList;
