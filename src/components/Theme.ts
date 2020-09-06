import {createBox, createText, createTheme, useTheme as useReTheme} from '@shopify/restyle'
import {ImageStyle, TextStyle, ViewStyle} from "react-native";

const palette = {
    primaryCyan: "#2CB9B0",
    primaryLight: "#E7F9F7",
    secondaryBlue: "#0C0D34",
    textBody: "rgba(12, 13, 52, 0.5)",
    textHero: "rgba(255, 255, 255, 1)",
    grey: "#F4F0EF",
    lightGrey: "#FAFAFA",
    darkGrey: "#808080",
    white: "white",
    red: "#FF0000",
    danger: "#FF0058",
    orange: "#FE5E33",
    yellow: "#FFC641",
    pink: "#FF87A2",
    violet: "#442CB9",
    lightBlue: "#BFEAF5",
};


export const theme = createTheme({
    colors: {
        primary: palette.primaryCyan,
        primaryLight: palette.primaryLight,
        secondary: palette.secondaryBlue,
        body: palette.textBody,
        hero: palette.textHero,
        grey: palette.grey,
        slideBg: palette.lightGrey,
        darkGrey: palette.darkGrey,
        white: palette.white,
        danger: palette.danger,
        red: palette.red,
        orange: palette.orange,
        yellow: palette.yellow,
        pink: palette.pink,
        violet: palette.violet,
        lightBlue: palette.lightBlue,
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii: {
        zero: 0,
        s: 4,
        m: 10,
        l: 25,
        xl: 75,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    textVariants: {
        hero: {
            fontSize: 80,
            fontFamily: "SFProDisplay-Bold",
            color: 'hero',
            textAlign: "center",
            lineHeight: 80,
        },
        title1: {
            fontSize: 28,
            fontFamily: "SFProDisplay-Semibold",
            color: 'secondary',
            fontWeight: "bold",
        },
        title2: {
            fontSize: 24,
            fontFamily: "SFProDisplay-Semibold",
            color: 'secondary',
            lineHeight: 30,
        },
        body: {
            fontSize: 16,
            fontFamily: "SFProDisplay-Regular",
            lineHeight: 24,
            color: 'body',
            fontWeight: "normal",
        },
        button: {
            fontSize: 15,
            fontFamily: "SFProDisplay-Medium",
            textAlign: "center",
        },
        header: {
            fontSize: 12,
            lineHeight: 24,
            color: "secondary",
            fontFamily: "SFProDisplay-Semibold",
        },
    }
});

export type Theme = typeof theme;
export const useTheme = () => useReTheme<Theme>();
// export default theme;

export const Text = createText<Theme>();
export const Box = createBox<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
export const makeStyle = <T extends NamedStyles<T>>(
    styles: (theme: Theme) => T
) => () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
}


