import { useContext } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { ToggleThemeContext } from "../theme/themeProvider";
import { darkColorPalette, lightColorPalette } from "../theme/theme";
import { defaultTitle, profile } from "../mock/data";
import { HeadTag, Navigation, Hero, BackToHome, Footer } from "./index";
import ScrollToTop from "./scrollToTop";

interface Props {
  children: React.ReactNode;
  noContainer?: boolean;
  home?: boolean;
  blog?: boolean;
  noHero?: boolean;
  siteTitle?: string;
}

const Layout = ({
  children,
  home,
  blog,
  noHero,
  noContainer,
  siteTitle = defaultTitle,
}: Props) => {
  const { isDark } = useContext(ToggleThemeContext);
  const useStyles = makeStyles({
    layout: {
      backgroundColor: isDark
        ? darkColorPalette.primary
        : lightColorPalette.primary,
      color: isDark ? darkColorPalette.text : lightColorPalette.text,
    },
    container: {
      minHeight: "100vh",
    },
  });

  const classes = useStyles();
  return (
    <>
      <HeadTag siteTitle={siteTitle} />
      <Navigation disable={blog} />
      <Box className={classes.layout}>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="stretch"
          className={classes.container}
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
