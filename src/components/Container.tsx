import React, {ReactNode} from 'react';
import theme, {Box} from "./Theme";
import {Image, StatusBar, StyleSheet} from "react-native";
import {width} from '../helpers/constants';

interface ContainerProps {
    children: ReactNode;
}

export const assets = [require("../../assets/patterns/01.jpg")];
const aspectRatio = 2000 / 3000;
const imgHeight = width * aspectRatio;

const Container = ({children}: ContainerProps) => {
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
            <Box height={200} backgroundColor={"secondary"}/>
        </Box>
    );
};

export default Container;
