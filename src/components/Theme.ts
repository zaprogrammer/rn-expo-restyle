import {createTheme} from '@shopify/restyle'

const palette = {
    primaryCyan: "#2CB9B0",
    primaryBlue: "#0C0D34",
    textBody: "rgba(12, 13, 52, 0.7)",
    textHero: "rgba(255, 255, 255, 1)",
    grey: "rgba(12, 13, 52, 0.05)",
    white: "white"
};


const theme = createTheme({
    colors: {
        primary: palette.primaryCyan,
        title: palette.primaryBlue,
        body: palette.textBody,
        hero: palette.textHero,
        grey: palette.grey,
        white: palette.white,
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    textVariants: {
        hero: {
            fontSize: 80,
            color: 'hero',
            textAlign: "center",
            lineHeight: 80,
        },
        title1: {
            fontSize: 28,
            color: 'title',
            fontWeight: "bold",
        },
        title2: {
            fontSize: 24,
            lineHeight: 30,
            color: 'title',
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
            color: 'body',
            fontWeight: "normal",
        },
        button: {
            fontSize: 15,
            textAlign: "center",
        },
    }
});

export type Theme = typeof theme;
export default theme;
