import React from 'react';
import {Box, Text, Theme} from "../../components/Theme";
import {RectButton} from "react-native-gesture-handler";
import {RoundedIcon} from "../../components";
import {useTheme} from "@shopify/restyle";
import {HomeRoutes} from "../../components/Navigation";
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from "@react-navigation/drawer/lib/typescript/src/types";

interface BaseDrawerItem {
    icon: string;
    color: keyof Theme["colors"];
    label: string;
}

interface ScreenDrawerItem extends BaseDrawerItem {
    screen: keyof HomeRoutes;
}

interface OnPressDrawerItem {
    onPress: (navigation: ReturnType<typeof useNavigation>) => void;
}

export type DrawerItemProps = ScreenDrawerItem | OnPressDrawerItem;

const DrawerItem = ({icon, color, label, ...props}: DrawerItemProps) => {
    const theme = useTheme();
    const navigation = useNavigation<DrawerNavigationProp<HomeRoutes, "OutfitIdeas">>();
    return (
        <RectButton
            style={{borderRadius: theme.borderRadii.m}}
            onPress={() =>
                "screen" in props ? navigation.navigate(props.screen) : props.onPress(navigation)}>
            <Box flexDirection={"row"} alignItems={"center"} padding={"m"} borderRadius={"m"}>
                <RoundedIcon
                    name={icon}
                    size={36}
                    iconRatio={0.5}
                    color={"background"}
                    backgroundColor={color}/>
                <Text variant={"button"} color={"secondary"} marginLeft={"m"}>{label}</Text>
            </Box>
        </RectButton>
    );
};

export default DrawerItem;
