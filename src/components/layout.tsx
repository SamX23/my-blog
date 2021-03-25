import { makeStyles } from "@material-ui/core/styles";
import HeadTag from "./head";
import Hero from "./hero";
import BackToHome from "./backToHome";
import Footer from "./footer";
import { defaultTitle, profile } from "../mock/data";

type Props = {
  children: React.ReactNode;
  home?: boolean;
  siteTitle?: string;
};

const useStyles = makeStyles({
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

const Layout = ({ children, home, siteTitle = defaultTitle }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <HeadTag siteTitle={siteTitle} />

      <header className={classes.header}>
        <Hero home={home} name={profile.fullName} />
      </header>

      <main>{children}</main>

      {!home && <BackToHome />}

      <Footer />
    </div>
  );
};

export default Layout;
