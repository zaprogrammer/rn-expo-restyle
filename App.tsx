import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {Onboarding, Welcome} from "./src/Authentication";

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
    return (<AuthenticationStack.Navigator headerMode={"none"}>
        <AuthenticationStack.Screen name="Onboarding" component={Onboarding}/>
        <AuthenticationStack.Screen name="Welcome" component={Welcome}/>
    </AuthenticationStack.Navigator>)

}

const App = () => {
    return (
        <NavigationContainer>
            <AuthenticationNavigator/>
        </NavigationContainer>
    );
}

export default App;
