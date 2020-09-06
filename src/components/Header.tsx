import React from 'react';
import {Box, RoundedIconButton, Text} from "../components";
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
    };
    dark: boolean;
}

const Header = ({left, title, right, dark}: HeaderProps) => {
    const insets = useSafeAreaInsets();
    const color = dark ? "secondary" : "white";
    const backgroundColor = dark ? "slideBg" : "secondary";

    return (
        <Box flexDirection={"row"} style={{marginTop: insets.top}}
             alignItems={"center"}
             justifyContent={"space-between"}
             paddingHorizontal={"m"}
        >
            <RoundedIconButton
                onPress={left.onPress}
                name={left.icon}
                iconRatio={0.4}
                size={44}
                {...{color, backgroundColor}}
            />
            <Text variant={"header"} {...{color}}>
                {title.toUpperCase()}
            </Text>
            <RoundedIconButton
                onPress={right.onPress}
                name={right.icon}
                iconRatio={0.4}
                size={44}
                {...{color, backgroundColor}}
            />
        </Box>
    );
};

Header.defaultProps = {
    dark: false,
};

export default Header;
