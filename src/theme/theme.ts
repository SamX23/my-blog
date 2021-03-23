import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";

export const darkColorPalette = {
  primary: "rgb(0,0,0)",
  text: "rgb(255,255,255)",
  loadingBar: "#7b7b7b",
};
export const lightColorPalette = {
  primary: "rgb(255,255,255)",
  text: "rgb(0,0,0)",
  loadingBar: "#6cb0ff",
};

const options = (dark: boolean): ThemeOptions => {
  const paletteColors = dark ? darkColorPalette : lightColorPalette;
  return {
    palette: {
      type: dark ? "dark" : "light",
      primary: {
        main: paletteColors.primary,
      },
    },
  };
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
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
        },

        a: {
          color: "#0070f3",
          textDecoration: "none",
          "&:hover": {
            color: "#0000f3",
          },
        },

        img: {
          maxWidth: "100%",
          display: "block",
        },
      },
    },
  },
});

export const darkTheme = createMuiTheme(options(false));
export const lightTheme = createMuiTheme(options(false));
export default theme;
