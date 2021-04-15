import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeadTag from "./head";
import Hero from "./hero";
import BackToHome from "./backToHome";
import Footer from "./footer";
import { defaultTitle, profile } from "../mock/data";
import Navigation from "./navigation";
import { darkColorPalette, lightColorPalette } from "../theme/theme";
import { ToggleThemeContext } from "../theme/themeProvider";

type Props = {
  children: React.ReactNode;
  home?: boolean;
  blog?: boolean;
  siteTitle?: string;
};

const Layout = ({ children, home, blog, siteTitle = defaultTitle }: Props) => {
  const { isDark } = useContext(ToggleThemeContext);
  const useStyles = makeStyles({
    layout: {
      backgroundColor: isDark
        ? darkColorPalette.primary
        : lightColorPalette.primary,
      color: isDark ? darkColorPalette.text : lightColorPalette.text,
    },
    container: {
      maxWidth: "1100px",
      padding: "0 1.5rem",
      margin: "0 auto",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <HeadTag siteTitle={siteTitle} />
      <Navigation blog={blog} />
      <div className={classes.container}>
        <header className={classes.header}>
          <Hero home={home} name={profile.fullName} />
        </header>

        <main>{children}</main>

        {!home && <BackToHome />}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
