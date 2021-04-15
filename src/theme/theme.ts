import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";

// Color pallete modified from https://colorhunt.co/palette/225739
// rgba(236, 236, 228, 1)
// rgba(0, 231, 239, 1)
// rgba(0, 136, 145, 1)
// rgba(0, 88, 122, 1)
// rgba(15, 48, 87, 1)

export const darkColorPalette = {
  primary: "rgba(15, 48, 87, 1)",
  secondary: "rgba(96, 182, 243,1)",
  text: "rgba(236, 236, 228, 1)",
  link: "rgba(0, 231, 239, 1)",
  linkHover: "rgba(96, 182, 243,1)",
  loadingBar: "rgba(0, 136, 145, 1)",
};
export const lightColorPalette = {
  primary: "rgba(236, 236, 228, 1)",
  secondary: "rgba(0, 136, 145, 1)",
  text: "rgba(15, 48, 87, 1)",
  link: "rgba(0, 88, 122, 1)",
  linkHover: "rgba(96, 182, 243,1)",
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
            color: paletteColors.link,
            textDecoration: "none",
            fontWeight: "bold",
            "&:hover": {
              color: paletteColors.linkHover,
            },
          },
        },
      },
    },
  };
};

export const darkTheme = createMuiTheme(options(false));
export const lightTheme = createMuiTheme(options(true));
