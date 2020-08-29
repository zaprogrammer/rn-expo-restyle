import React, {ReactNode} from 'react';
import theme, {Box} from "./Theme";
import {Image, StatusBar, StyleSheet} from "react-native";
import {width} from '../helpers/constants';
import {useSafeAreaInsets} from "react-native-safe-area-context";

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
}

export const assets = [require("../../assets/patterns/01.jpg")];
const aspectRatio = 2000 / 3000;
const imgHeight = width * aspectRatio;

const Container = ({children, footer}: ContainerProps) => {
    const insets = useSafeAreaInsets()
    return (
        <Box flex={1} backgroundColor={"secondary"}>
            <StatusBar barStyle={"light-content"}/>
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
    );
};

export default Container;
