import React from 'react';
import {Box, Text, Theme} from "../../components/Theme";
import {RectButton} from "react-native-gesture-handler";
import {RoundedIcon} from "../../components";
import {useTheme} from "@shopify/restyle";
import {HomeRoutes} from "../../components/Navigation";
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from "@react-navigation/drawer/lib/typescript/src/types";

export interface DrawerItemProps {
    icon: string;
    color: keyof Theme["colors"];
    screen: keyof HomeRoutes;
    label: string;
}

const DrawerItem = ({icon, color, screen, label}: DrawerItemProps) => {
    const theme = useTheme();
    const navigation = useNavigation<DrawerNavigationProp<HomeRoutes, "OutfitIdeas">>();
    return (
        <RectButton
            style={{borderRadius: theme.borderRadii.m}}
            onPress={() => navigation.navigate(screen)}>
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
