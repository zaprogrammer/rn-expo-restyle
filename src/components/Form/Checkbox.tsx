import React from 'react';
import {Box, Text, useTheme} from "../Theme";
import {Feather as Icon} from "@expo/vector-icons";
import {RectButton} from "react-native-gesture-handler";

interface CheckboxProps {
    label: string,
    checked: boolean;
    onChange: (v: boolean) => void;
}

const Checkbox = ({label, checked, onChange}: CheckboxProps) => {
    const theme = useTheme();

    return (
        <RectButton onPress={onChange}
                    activeOpacity={0}
                    style={{justifyContent: "center"}}>
            <Box flexDirection={"row"} alignItems={"center"}>
                <Box
                    height={20} width={20}
                    marginRight={"m"}
                    alignItems={"center"}
                    borderRadius={"s"}
                    borderWidth={1}
                    borderColor={"primary"}
                    justifyContent={"center"}
                    backgroundColor={checked ? "primary" : "background"}>
                    <Icon name={"check"} color={theme.colors.background}/>
                </Box>
                <Text variant={"button"}>{label}</Text>
            </Box>
        </RectButton>
    );
};

export default Checkbox;
