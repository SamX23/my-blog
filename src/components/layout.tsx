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
        <Container>
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
              <main>{children}</main>
            </Grid>
            <Grid item>
              {!home && <BackToHome />}
              <Footer />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ScrollToTop />
    </>
  );
};

export default Layout;
