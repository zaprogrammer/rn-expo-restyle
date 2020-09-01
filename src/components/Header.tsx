import React from 'react';
import {Box, RoundedIconButton, Text} from "./index";
import {useSafeAreaInsets} from "react-native-safe-area-context";

interface HeaderProps {
    left: {
        icon: string;
        onPress: () => void;
    };
    title: string;
    right: {
        icon: string;
        onPress: () => void;
    }
}

const Header = ({left, title, right}: HeaderProps) => {
    const insets = useSafeAreaInsets();

    return (
        <Box flexDirection={"row"} style={{marginTop: insets.top}}
             alignItems={"center"}
             justifyContent={"space-between"}
             paddingHorizontal={"m"}
        >
            <RoundedIconButton
                onPress={() => left.onPress}
                name={left.icon}
                size={24}
                color={"white"}
                backgroundColor={"secondary"}/>
            <Text
                variant={"header"}
                color={"white"}>
                {title.toUpperCase()}
            </Text>
            <RoundedIconButton
                onPress={() => right.onPress}
                name={right.icon}
                size={24}
                color={"white"}
                backgroundColor={"secondary"}/>
        </Box>
    );
};

export default Header;
