"use client";

import Link from "next/link";
import { useCallback, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {
  darkColorPalette,
  lightColorPalette,
  ToggleThemeContext,
} from "../theme/theme";
import Box from "@mui/material/Box";
import ProgressBar from "./progressBar";
import ThemeButton from "./themeButton";

interface Props {
  disable?: boolean;
}

const Navigation = ({ disable }: Props) => {
  const { isDark } = useContext(ToggleThemeContext);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      {!disable && (
        <Box
          sx={{
            position: "fixed",
            width: "100%",
            zIndex: 1,
          }}
          id="navbar"
        >
          <ProgressBar />
          <Container
            maxWidth="xl"
            sx={{
              position: "fixed",
              left: 0,
              right: 0,
              transition: "top 0.5s",
              backgroundColor: isDark
                ? darkColorPalette.primary
                : lightColorPalette.primary,
            }}
            style={{ top: visible ? "0" : "-60px" }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                padding: ".5em",
                textAlign: "center",
                width: "100%",
                "& a": {
                  fontWeight: 500,
                },
                "& button": {
                  width: "100%",
                  height: "3rem",
                  backgroundColor: isDark
                    ? darkColorPalette.secondary
                    : lightColorPalette.secondary,
                  "&:hover": {
                    backgroundColor: isDark
                      ? darkColorPalette.secondary
                      : lightColorPalette.secondary,
                    opacity: ".8",
                  },
                },
              }}
            >
              <Grid item xs>
                <Link href="/about">About</Link>
              </Grid>
              <Grid item xs>
                <Link href="/blog">Blog</Link>
              </Grid>
              <Grid item xs={2}>
                <ThemeButton />
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};

export default Navigation;
