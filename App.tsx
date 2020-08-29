import * as React from 'react';
import {assets as authenticationAssets, AuthenticationNavigator} from "./src/Authentication";
import {ThemeProvider} from "@shopify/restyle";
import {LoadAssets, theme} from "./src/components";
import {SafeAreaProvider} from "react-native-safe-area-context";

const fonts = {
    "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
    "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf")
}

const assets = [...authenticationAssets];

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <LoadAssets {...{fonts, assets}}>
                <SafeAreaProvider>
                    <AuthenticationNavigator/>
                </SafeAreaProvider>
            </LoadAssets>
        </ThemeProvider>
    );
}

export default App;
