import React, {ReactNode} from 'react';
import {Image, Platform, StyleSheet} from "react-native";
import Constants from "expo-constants";
import {height, width} from '../helpers/constants';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Box, useTheme} from "./Theme";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
}

export const assets = [require("../../assets/patterns/01.jpg")];
const aspectRatio = 2000 / 3000;
const imgHeight = width * aspectRatio;

const Container = ({children, footer}: ContainerProps) => {
    const insets = useSafeAreaInsets();
    const theme = useTheme();
    return (
        <KeyboardAwareScrollView scrollEnabled={false}>
            <Box height={height + (Platform.OS === "android" ? Constants.statusBarHeight : 0)}
                 backgroundColor={"secondary"}>
                <Box backgroundColor={"white"}>
                    <Box borderBottomLeftRadius={"xl"} overflow={"hidden"} height={imgHeight * 0.61}>
                        <Image source={assets[0]}
                               style={{width, height: imgHeight, borderBottomLeftRadius: theme.borderRadii.xl}}/>
                    </Box>
                </Box>
                <Box flex={1} overflow={"hidden"}>
                    <Image source={assets[0]} style={{
                        ...StyleSheet.absoluteFillObject,
                        width,
                        height: imgHeight,
                        top: -imgHeight * 0.61,
                    }}/>
                    <Box flex={1} borderRadius={"xl"} borderTopLeftRadius={"zero"} backgroundColor={"white"}>

                        {children}

                    </Box>
                </Box>
                <Box backgroundColor={"secondary"} paddingTop={"m"}>
                    {footer}
                    <Box height={insets.bottom}/>
                </Box>
            </Box>
        </KeyboardAwareScrollView>
    );
};

export default Container;
