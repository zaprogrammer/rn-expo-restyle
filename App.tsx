import * as React from 'react';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {createStackNavigator} from "@react-navigation/stack";
import {ThemeProvider} from "./src/components/Theme";
import {AppRoutes} from "./src/components/Navigation";
import {assets as authenticationAssets, AuthenticationNavigator} from "./src/Authentication";
import {LoadAssets} from "./src/components";
import {HomeNavigator} from "./src/Home";

const fonts = {
    "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
    "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf")
}
const assets = [...authenticationAssets];

const AppStack = createStackNavigator<AppRoutes>();

const App = () => {
    return (
        <ThemeProvider>
            <LoadAssets {...{fonts, assets}}>
                <SafeAreaProvider>
                    <AppStack.Navigator headerMode={"none"}>
                        <AppStack.Screen name={"Authentication"} component={AuthenticationNavigator}/>
                        <AppStack.Screen name={"Home"} component={HomeNavigator}/>
                    </AppStack.Navigator>
                </SafeAreaProvider>
            </LoadAssets>
        </ThemeProvider>
    );
}

export default App;
