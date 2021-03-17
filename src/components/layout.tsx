import HeadTag from "./head";
import styles from "../../styles/layout.module.css";
import Hero from "./hero";
import BackToHome from "./backToHome";
import Footer from "./footer";
import { defaultTitle, profile } from "../mock/data";

export default function Layout({
  children,
  home,
  siteTitle = defaultTitle,
}: {
  children: React.ReactNode;
  home?: boolean;
  siteTitle?: string;
}) {
  return (
    <div className={styles.container}>
      <HeadTag siteTitle={siteTitle} />

      <header className={styles.header}>
        <Hero home={home} name={profile.fullName} />
      </header>

      <main>{children}</main>

      {!home && <BackToHome />}

      <Footer />
    </div>
  );
}
