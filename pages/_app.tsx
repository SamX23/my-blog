import { AppProps } from "next/app";
import { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as DarkMode } from "../src/theme/themeProvider";
import theme from "../src/theme/theme";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DarkMode>
        <Component {...pageProps} />
      </DarkMode>
    </ThemeProvider>
  );
}

export default App;
