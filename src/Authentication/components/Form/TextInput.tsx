import React, {forwardRef} from 'react';
import {StyleSheet, TextInput as RNTextInput, TextInputProps as RNTextInputProps} from "react-native";
import {Box, useTheme} from "../../../components";
import {Feather as Icon} from '@expo/vector-icons';

interface TextInputProps extends RNTextInputProps {
    icon: string;
    touched?: boolean;
    error?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
    ({icon, touched, error, ...props}, ref) => {
        const theme = useTheme();
        const SIZE = theme.borderRadii.m * 2.5;
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
                    <Box height={SIZE} width={SIZE}
                         borderRadius={"m"}
                         justifyContent={"center"}
                         alignItems={"center"}
                         backgroundColor={!error ? "primary" : "danger"}
                         style={{borderRadius: SIZE / 2}}>
                        <Icon
                            name={!error ? "check" : "x"}
                            color={"white"}
                            size={theme.spacing.m}
                            style={{textAlign: "center"}}/>
                    </Box>
                )}
            </Box>
        );
    });

export default TextInput;
