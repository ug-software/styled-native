import { createContext, ReactNode, useContext } from "react";
import { Theme } from "../interface/theme";
import theme from ".";

const ThemeContext = createContext<Theme>(theme);

export { ThemeContext }
export default ({ children } : { children: ReactNode }) => {
    return(
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}