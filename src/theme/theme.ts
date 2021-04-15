import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";

// Color pallete from https://colorhunt.co/palette/225739
// rgba(231, 231, 222, 1)
// rgba(0, 136, 145, 1)
// rgba(0, 88, 122, 1)
// rgba(15, 48, 87, 1)

export const darkColorPalette = {
  primary: "rgba(15, 48, 87, 1)",
  // secondary: "#888811",
  text: "rgba(231, 231, 222, 1)",
  loadingBar: "rgba(0, 136, 145, 1)",
};
export const lightColorPalette = {
  primary: "rgba(231, 231, 222, 1)",
  // secondary: "#112288",
  text: "rgba(15, 48, 87, 1)",
  loadingBar: "rgba(0, 88, 122, 1)",
};

const options = (dark: boolean): ThemeOptions => {
  const paletteColors = dark ? darkColorPalette : lightColorPalette;
  return {
    palette: {
      type: dark ? "dark" : "light",
      primary: {
        main: paletteColors.primary,
      },
      // secondary: {
      //   main: paletteColors.secondary,
      // },
    },
    typography: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "*": {
            boxSizing: "border-box",
          },
          html: {
            "& body": {
              padding: "0",
              margin: "0",
              lineHeight: "1.6",
              fontSize: "18px",
            },
            scrollBehavior: "smooth",
          },
          a: {
            color: "red",
            textDecoration: "none",
            "&:hover": {
              color: "green",
            },
          },
        },
      },
    },
  };
};

export const darkTheme = createMuiTheme(options(false));
export const lightTheme = createMuiTheme(options(false));
