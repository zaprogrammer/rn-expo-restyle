import React from 'react';
import {Box, Text, Theme} from "../../components/Theme";
import {RectButton} from "react-native-gesture-handler";
import {RoundedIcon} from "../../components";
import {useTheme} from "@shopify/restyle";

export interface DrawerItemProps {
    icon: string;
    color: keyof Theme["colors"];
    screen: string;
    label: string;
}

const DrawerItem = ({icon, color, screen, label}: DrawerItemProps) => {
    const theme = useTheme();
    return (
        <RectButton style={{borderRadius: theme.borderRadii.m}}>
            <Box flexDirection={"row"} alignItems={"center"} padding={"m"} borderRadius={"m"}>
                <RoundedIcon
                    name={icon}
                    size={36}
                    iconRatio={0.5}
                    color={"white"}
                    backgroundColor={color}/>
                <Text variant={"button"} color={"secondary"} marginLeft={"m"}>{label}</Text>
            </Box>
        </RectButton>
    );
};

export default DrawerItem;
