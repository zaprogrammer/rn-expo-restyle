import React from 'react';
import {DrawerContentComponentProps, DrawerContentOptions} from "@react-navigation/drawer";
import {assets, Box, Text, useTheme} from "../../components";
import DrawerItem, {DrawerItemProps} from "./DrawerItem";
import {width} from '../../helpers/constants';
import {Image} from "react-native";
import Header from "../../components/Header";

export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 2000 / 3000;
const height = DRAWER_WIDTH * aspectRatio;
const items: DrawerItemProps[] = [
    {
        icon: "zap",
        label: "Outfit Ideas",
        screen: "OutfitIdeas",
        color: "primary"
    },
    {
        icon: "heart",
        label: "Favorites Outfits",
        screen: "FavoritesOutfits",
        color: "orange"
    },
    {
        icon: "user",
        label: "Edit Profile",
        screen: "EditProfile",
        color: "yellow"
    },
    {
        icon: "clock",
        label: "Transaction History",
        screen: "TransactionHistory",
        color: "pink"
    },
    {
        icon: "settings",
        label: "Notifications Settings",
        screen: "NotificationsSettings",
        color: "violet"
    },
    {
        icon: "log-out",
        label: "Logout",
        screen: "Logout",
        color: "secondary"
    },
]

const Drawer = ({}: DrawerContentComponentProps<DrawerContentOptions>) => {
    const theme = useTheme();

    return (
        <Box flex={1}>
            <Box flex={0.2} backgroundColor={"white"}>
                <Box position={"absolute"}
                     top={0} left={0} bottom={0} right={0}
                     backgroundColor={"secondary"}
                     borderBottomRightRadius={"xl"}
                >
                    <Header
                        title={"Menu"}
                        left={{icon: "x", onPress: () => true}}
                        right={{icon: "shopping-bag", onPress: () => console.log("Pressed")}}
                    />
                </Box>
            </Box>
            <Box flex={0.8}>
                <Box flex={1} backgroundColor={"secondary"}/>
                <Box flex={1} backgroundColor={"white"}/>
                <Box position={"absolute"}
                     top={0} left={0} bottom={0} right={0}
                     backgroundColor={"white"}
                     borderTopLeftRadius={"xl"}
                     borderBottomRightRadius={"xl"}
                     justifyContent={"center"}
                     padding={"xl"}>
                    <Box position={"absolute"} left={DRAWER_WIDTH / 2 - 50} top={-50} backgroundColor={"primary"}
                         width={100} height={100}
                         alignSelf={"center"} style={{borderRadius: 50}}/>
                    <Box marginVertical={"m"}>
                        <Text variant={"title1"} textAlign={"center"}>Ahmed Elshaabany</Text>
                        <Text variant={"body"} textAlign={"center"}>ahmed.elshaabany@gmail.com</Text>
                    </Box>

                    {
                        items.map(item => (<DrawerItem key={item.screen} {...item} />))
                    }
                </Box>
            </Box>
            <Box width={DRAWER_WIDTH} overflow={"hidden"} height={height * 0.61} backgroundColor={"white"}>
                <Image source={assets[2]}
                       style={{
                           width: DRAWER_WIDTH,
                           height,
                           borderTopLeftRadius: theme.borderRadii.xl
                       }}/>
                {/*<Box position={"absolute"}*/}
                {/*     top={0} left={0} bottom={0} right={0}*/}
                {/*     backgroundColor={"primary"}*/}
                {/*     borderTopLeftRadius={"xl"}/>*/}
            </Box>
        </Box>
    );
};

export default Drawer;
