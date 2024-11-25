import createTheme from "./create-theme";
import { Theme, mode, ThemeContext } from "./index.d";

const theme = createTheme();
export { theme, Theme, ThemeContext, createTheme, mode }