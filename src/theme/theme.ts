import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const darkColorPalette = {
  primary: "rgb(0,0,0)",
  text: "rgb(255,255,255)",
};
export const lightColorPalette = {
  primary: "rgb(255,255,255)",
  text: "rgb(0,0,0)",
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
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export const darkTheme = createMuiTheme(options(false));
export const lightTheme = createMuiTheme(options(false));
export default theme;
