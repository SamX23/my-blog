import { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { ToggleThemeContext } from "../theme/themeProvider";
import { darkColorPalette, lightColorPalette } from "../theme/theme";
import { defaultTitle, profile } from "../mock/data";
import { HeadTag, Navigation, Hero, BackToHome, Footer } from "./index";

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
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  });

  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.layout}>
      <HeadTag siteTitle={siteTitle} />
      <Navigation blog={blog} />
      <Container>
        <header className={classes.header}>
          <Hero home={home} name={profile.fullName} />
        </header>

        <main>{children}</main>

        {!home && <BackToHome />}
        <Footer />
      </Container>
    </Grid>
  );
};

export default Layout;
