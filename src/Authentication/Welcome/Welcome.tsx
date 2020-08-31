import React from 'react';
import {Box, Button, Text} from "../../components";
import {Image} from "react-native";
import {width} from "../../helpers/constants";
import {AuthenticationRoutes, StackNavigationProps} from "../../components/Navigation";
import {BorderlessButton} from "react-native-gesture-handler";

const picture = {
    src: require('../../../assets/5.png'),
    width: 1000,
    height: 1000,
};

export const assets = [picture.src];

const Welcome = ({navigation}: StackNavigationProps<AuthenticationRoutes, "Welcome">) => {

    return (
        <Box flex={1} backgroundColor={"white"}>
            <Box flex={1} borderBottomRightRadius={"xl"} backgroundColor={"grey"}>
                <Image source={picture.src}
                       style={{
                           width,
                           height: (width * picture.height) / picture.width,
                       }}
                />
            </Box>
            <Box flex={1} borderTopLeftRadius={"xl"}>
                <Box
                    backgroundColor={"grey"}
                    position={"absolute"}
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}/>
                <Box
                    flex={1}
                    backgroundColor={"white"}
                    borderTopLeftRadius={"xl"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    padding={"xl"}>
                    <Text variant={"title2"}>Let's get started</Text>
                    <Text variant={"body"} textAlign={"center"}>Login to your account below or signup for an amazing
                        experience</Text>
                    <Button variant={"primary"} label={"Have an account? Login"} onPress={() =>
                        navigation.navigate("Login")}/>
                    <Button
                        variant={"default"}
                        label={"Join us, it's Free"}
                        onPress={() => navigation.navigate("SignUp")}/>
                    <BorderlessButton onPress={() => navigation.navigate("ForgotPassword")}>
                        <Text variant={"button"} color={"secondary"}>Forgot password?</Text>
                    </BorderlessButton>
                </Box>

            </Box>

        </Box>
    );
};

export default Welcome;
