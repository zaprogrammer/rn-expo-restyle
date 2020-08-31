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
    pattern: 0 | 1 | 2;
}

export const assets = [
    require("../../assets/patterns/01.jpg"),
    require("../../assets/patterns/02.jpg"),
    require("../../assets/patterns/03.jpg")];
const aspectRatio = 2000 / 3000;
const imgHeight = width * aspectRatio;

const Container = ({children, footer, pattern}: ContainerProps) => {
    const insets = useSafeAreaInsets();
    const theme = useTheme();
    const asset = assets[pattern];
    return (
        <KeyboardAwareScrollView scrollEnabled={false}>
            <Box height={height + (Platform.OS === "android" ? Constants.statusBarHeight : 0)}
                 backgroundColor={"secondary"}>
                <Box backgroundColor={"white"}>
                    <Box borderBottomLeftRadius={"xl"} overflow={"hidden"} height={imgHeight * 0.61}>
                        <Image source={asset}
                               style={{width, height: imgHeight, borderBottomLeftRadius: theme.borderRadii.xl}}/>
                    </Box>
                </Box>
                <Box flex={1} overflow={"hidden"}>
                    <Image source={asset} style={{
                        ...StyleSheet.absoluteFillObject,
                        width,
                        height: imgHeight,
                        top: -imgHeight * 0.61,
                    }}/>
                    <Box
                        flex={1}
                        justifyContent={"center"}
                        padding={"xl"}
                        borderRadius={"xl"}
                        borderTopLeftRadius={"zero"}
                        backgroundColor={"white"}>

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
