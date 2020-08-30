import React from 'react';
import {Box, useTheme} from "./Theme";
import {Feather as Icon} from "@expo/vector-icons";
import {RectButton} from "react-native-gesture-handler";

interface CloseButtonProps {
    onPress: () => void;

}

const SIZE = 60;

const CloseButton = ({onPress}: CloseButtonProps) => {

    const theme = useTheme();

    return (
        <Box flexDirection={"row"} justifyContent={"center"}>
            <RectButton {...{onPress}}>
                <Box
                    style={{height: SIZE, width: SIZE, borderRadius: SIZE / 2}}
                    backgroundColor={"white"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Icon name={"x"} color={theme.colors.secondary} size={45} style={{textAlign: "center"}}/>
                </Box>
            </RectButton>
        </Box>
    );
};

export default CloseButton;
