import React, {forwardRef} from 'react';
import {StyleSheet, TextInput as RNTextInput, TextInputProps as RNTextInputProps} from "react-native";
import {Box, useTheme} from "../Theme";
import {Feather as Icon} from '@expo/vector-icons';
import RoundedIcon from "../RoundedIcon";

interface TextInputProps extends RNTextInputProps {
    icon: string;
    touched?: boolean;
    error?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
    ({icon, touched, error, ...props}, ref) => {
        const theme = useTheme();
        const reColor = !touched ? "body" : (error ? "danger" : "primary");
        const color = theme.colors[reColor];

        return (
            <Box
                flexDirection={"row"}
                height={48}
                alignItems={"center"}
                padding={"s"}
                borderRadius={"s"}
                borderColor={reColor}
                borderWidth={StyleSheet.hairlineWidth}>
                <Box padding={"s"}>
                    <Icon name={icon} size={theme.spacing.m} {...{color}}/>
                </Box>
                <Box flex={1}>
                    <RNTextInput
                        underlineColorAndroid={"transparent"}
                        placeholderTextColor={color}
                        {...{ref}}
                        {...props}/>
                </Box>
                {touched && (
                    <RoundedIcon
                        name={!error ? "check" : "x"}
                        size={theme.spacing.l}
                        color={"background"}
                        backgroundColor={!error ? "primary" : "danger"}/>
                )}
            </Box>
        );
    });

export default TextInput;
