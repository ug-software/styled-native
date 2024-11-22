import { Theme } from "./index.d";

const theme : Theme = {
    mode: "light",
    pallet: {
        primary: {
            main: "#38BF34",
            light: "#8cd891",
            dark: "#096736",
        },
        secundary: {
            main: "#38BF34",
            light: "#CAF2C9",
            dark: "#067335",
        },
        background: {
            main: "#ffff",
            light: "#F2F2F2",
            dark: "#BFBFBF",
        },
        text: {
            main: "rgba(0, 0, 0, 0.87)",
            light: "rgba(0, 0, 0, 0.6)",
            dark: "rgba(0, 0, 0, 0.87)",
        },
        warning: {
            main: "#ed6c02",
            light: "#ff9800",
            dark: "#e65100",
        },
        error: {
            main: "#d32f2f",
            light: "#ef5350",
            dark: "#c62828",
        },
        info: {
            main: "#0288d1",
            light: "#03a9f4",
            dark: "#01579b",
        },
        success: {
            main: "#2e7d32",
            light: "#4caf50",
            dark: "#1b5e20",
        }
    },
    typograph: {
        h1: {
            fontSize: 6 * 16,
            fontWeight: '300',
            letterSpacing: -0.01562
        },
        h2: {
            fontSize: 3.75 * 16,
            fontWeight: '400',
            letterSpacing: -0.00833
        },
        h3: {
            fontSize: 3 * 16,
            fontWeight: '400',
            letterSpacing: 0
        },
        h4: {
            fontSize: 2.125 * 16,
            fontWeight: '400',
            letterSpacing: 0.00735
        },
        h5: {
            fontSize: 1.5 * 16,
            fontWeight: '400',
            letterSpacing: 0
        },
        h6: {
            fontSize: 1.25 * 16,
            fontWeight: '500',
            letterSpacing: 0.0075,
        },
        paragraphy: {
            fontSize: 12,
            fontWeight: '400',
            letterSpacing: 0.00938,
        },
        subparagraph: {
            fontSize: 10,
            fontWeight: '400',
            letterSpacing: 0.00714,
        }
    }
};

export default theme
export { Theme }