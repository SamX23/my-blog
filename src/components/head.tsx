import Head from "next/head";
import { useContext } from "react";
import { darkColorPalette, lightColorPalette } from "../theme/theme";
import { ToggleThemeContext } from "../theme/themeProvider";

type Props = {
  siteTitle: string;
};

const HeadTag = ({ siteTitle }: Props) => {
  const { isDark } = useContext(ToggleThemeContext);

  return (
    <Head>
      <meta
        name="theme-color"
        content={isDark ? darkColorPalette.primary : lightColorPalette.primary}
        key="theme-color"
      />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta
        name="description"
        content="Sami Kalammallah blog about his front end journey"
        key="description"
      />
      <meta name="og:title" content={siteTitle} key="og:title" />
      <meta property="og:type" content="website" key="og:type" />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        key="og:image"
      />
      <meta
        name="og:description"
        property="og:description"
        content="Sami Kalammallah blog about his front end journey"
        key="og:description"
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta
        name="google-site-verification"
        content="nWaKNPg87UzU3zONVNwXr_dzHzBfS35RS-hceGJaxJk"
        key="google-site-verification"
      />
      <link rel="icon" href="/icon.svg" key="icon" />
      <link rel="apple-touch-icon" href="icon.svg" key="apple-touch-icon" />
      <title>{siteTitle}</title>
    </Head>
  );
};

export default HeadTag;
