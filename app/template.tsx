"use client";

import React, { useContext } from "react";
import Navigation from "../src/components/navigation";
import {
  darkColorPalette,
  lightColorPalette,
  ToggleThemeContext,
} from "../src/theme/theme";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Footer from "../src/components/footer";
import BackToHome from "../src/components/backToHome";

const Template = ({ children }: { children: React.ReactNode }) => {
  const { isDark } = useContext(ToggleThemeContext);

  return (
    <>
      <Navigation />
      <Box
        sx={{
          backgroundColor: isDark
            ? darkColorPalette.primary
            : lightColorPalette.primary,
          color: isDark ? darkColorPalette.text : lightColorPalette.text,
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="stretch"
          sx={{
            minHeight: "100vh",
            paddingTop: "60px",
          }}
        >
          <Grid item>
            <Container>
              <main>{children}</main>
            </Container>
          </Grid>
          <Grid item>
            <Container>
              <BackToHome />
              <Footer />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Template;
