import React from 'react';
import {Routes, StackNavigationProps} from "../../components/Navigation";
import {Box, Button, CloseButton, Container, Text, useTheme} from "../../components";
import {Feather as Icon} from "@expo/vector-icons";

const SIZE = 80;

const PasswordChanged = ({navigation}: StackNavigationProps<Routes, "PasswordChanged">) => {

    const theme = useTheme();

    return (
        <Container footer={<CloseButton onPress={() => navigation.pop()}/>}>
            <Box flex={1} justifyContent={"center"} alignItems={"center"}>
                <Box height={SIZE} width={SIZE}
                     style={{borderRadius: SIZE / 2}}
                     backgroundColor={"primaryLight"}
                     justifyContent={"center"}
                     alignItems={"center"}
                     marginBottom={"xl"}>
                    <Icon name={"check"}
                          size={32}
                          color={theme.colors.primary}
                          style={{textAlign: "center", justifyContent: "center"}}/>
                </Box>
                <Text variant={"title1"} textAlign={"center"} marginBottom={"l"}>
                    Forgot Password?
                </Text>
                <Text variant={"body"} textAlign={"center"} marginBottom={"l"}>
                    Enter the email address associated with your account
                </Text>
                <Box alignItems={"center"} marginTop={"m"}>
                    <Button
                        variant={"primary"}
                        label={"Reset password"}
                        onPress={() => navigation.navigate("Login")}/>
                </Box>
            </Box>
        </Container>
    );
};

export default PasswordChanged;
