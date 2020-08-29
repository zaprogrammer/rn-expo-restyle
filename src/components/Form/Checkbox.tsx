import React from 'react';
import theme, {Box, Text} from "../Theme";
import {Feather as Icon} from "@expo/vector-icons";
import {RectButton} from "react-native-gesture-handler";

interface CheckboxProps {
    label: string,
    checked: boolean;
    onChange: (v: boolean) => void;
}

const Checkbox = ({label, checked, onChange}: CheckboxProps) => {

    return (
        <RectButton onPress={onChange}
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
                    backgroundColor={checked ? "primary" : "white"}>
                    <Icon name={"check"} color={theme.colors.white}/>
                </Box>
                <Text variant={"button"}>{label}</Text>
            </Box>
        </RectButton>
    );
};

export default Checkbox;