"use client";

import { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {
  darkColorPalette,
  lightColorPalette,
  ToggleThemeContext,
} from "../theme/theme";
import { profile } from "../constant/data";
import ScrollToTop from "./scrollToTop";
import Navigation from "./navigation";
import Hero from "./hero";
import BackToHome from "./backToHome";
import Footer from "./footer";

interface Props {
  children: React.ReactNode;
  noContainer?: boolean;
  home?: boolean;
  blog?: boolean;
  noHero?: boolean;
}

const Layout = ({ children, home, blog, noHero, noContainer }: Props) => {
  const { isDark } = useContext(ToggleThemeContext);

  return (
    <>
      <Navigation disable={blog} />
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
          }}
        >
          {!noHero && (
            <Grid item>
              <Hero home={home} name={profile.fullName} />
            </Grid>
          )}
          <Grid item>
            {noContainer ? (
              <main>{children}</main>
            ) : (
              <Container>
                <main>{children}</main>
              </Container>
            )}
          </Grid>
          <Grid item>
            <Container>
              {!home && <BackToHome />}
              <Footer />
            </Container>
          </Grid>
        </Grid>
      </Box>
      <ScrollToTop />
    </>
  );
};

export default Layout;
