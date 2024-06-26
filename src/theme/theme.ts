import { createTheme, DeprecatedThemeOptions } from "@mui/material/styles";
import { createContext } from "react";

// Color pallete modified from https://colorhunt.co/palette/225739

export const darkColorPalette = {
  primary: "rgba(15, 48, 87, 1)",
  secondary: "rgba(96, 182, 243,1)",
  text: "rgba(236, 236, 228, 1)",
  link: "rgba(0, 231, 239, 1)",
  linkHover: "rgba(96, 182, 243,1)",
  loadingBar: "rgba(0, 136, 145, 1)",
  repo: "nord",
};

export const lightColorPalette = {
  primary: "rgb(203, 228, 222)",
  secondary: "rgb(14, 131, 136)",
  text: "rgb(44, 51, 51)",
  link: "rgb(46, 79, 79)",
  linkHover: "rgb(44, 51, 51)",
  loadingBar: "rgb(46, 79, 79)",
  repo: "prussian",
};

const options = (dark: boolean): DeprecatedThemeOptions => {
  const paletteColors = dark ? darkColorPalette : lightColorPalette;
  return {
    palette: {
      mode: dark ? "dark" : "light",
      primary: {
        main: paletteColors.primary,
      },
      secondary: {
        main: paletteColors.secondary,
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
          hr: {
            border: `.25rem dashed ${paletteColors.text} !important`,
            width: "100%",
          },
          "*::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0, 0, 0, .5)",
            backgroundColor: "#ffffff",
          },
          "*::-webkit-scrollbar": {
            width: "1em",
            backgroundColor: "#f5f5f5",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: paletteColors.secondary,
          },
        },
      },
    },
  };
};

export const darkTheme = createTheme(options(false));
export const lightTheme = createTheme(options(true));
export const ToggleThemeContext = createContext({
  toggleTheme: () => {},
  isDark: false,
});
