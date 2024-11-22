import { TextStyle } from "react-native"

export type mode = "light" | "dark"

export interface TypographProps {
    fontWeight: TextStyle["fontWeight"]
    fontSize: TextStyle["fontSize"]
    letterSpacing: TextStyle["letterSpacing"]
}

export interface Typograph {
    h1: TypographProps,
    h2: TypographProps,
    h3: TypographProps,
    h4: TypographProps,
    h5: TypographProps,
    h6: TypographProps,
    paragraphy: TypographProps,
    subparagraph: TypographProps,
}

export interface Pallet {
    main: string
    light: string
    dark: string
}

export interface Theme {
    mode: mode,
    pallet: {
        primary: Pallet,
        secundary: Pallet,
        error: Pallet,
        warning: Pallet,
        info: Pallet,
        success: Pallet,
        background: Pallet,
        text: Pallet
    }
    typograph: Typograph
}

export interface Color {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
}