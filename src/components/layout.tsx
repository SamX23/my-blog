import { useContext } from "react";
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
  siteTitle?: string;
}

const Layout = ({ children, home, blog, siteTitle = defaultTitle }: Props) => {
  const { isDark } = useContext(ToggleThemeContext);
  const useStyles = makeStyles({
    layout: {
      backgroundColor: isDark
        ? darkColorPalette.primary
        : lightColorPalette.primary,
      color: isDark ? darkColorPalette.text : lightColorPalette.text,
      minHeight: "100vh",
    },
  });

  const classes = useStyles();
  return (
    <>
      <HeadTag siteTitle={siteTitle} />
      <Navigation blog={blog} />
      <Container className={classes.layout}>
        <Grid container direction="column">
          <Hero home={home} name={profile.fullName} />

          <main>{children}</main>

          {!home && <BackToHome />}

          <ScrollToTop />
          <Footer />
        </Grid>
      </Container>
    </>
  );
};

export default Layout;
