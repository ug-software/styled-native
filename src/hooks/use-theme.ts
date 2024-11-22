import { useContext } from "react"
import { ThemeContext } from "../theme/provider"

export default () => {
    const theme = useContext(ThemeContext);
    return theme
}