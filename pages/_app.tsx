import { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "../src/theme/themeProvider";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
