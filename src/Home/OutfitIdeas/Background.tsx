import React from 'react';
import {Box, useTheme} from "../../components";
import {Image, StyleSheet} from "react-native";

interface BackgroundProps {
}

const Background = ({}: BackgroundProps) => {

    const theme = useTheme();
    return (
        <Box style={StyleSheet.absoluteFillObject}>
            <Box flex={1 / 3} backgroundColor={"lightBlue"}>
                <Box flex={1} backgroundColor={"white"} borderBottomRightRadius={"xl"}/>
            </Box>
            <Box flex={1 / 3}>
                <Box flex={1} backgroundColor={"white"}/>
                <Box flex={1} backgroundColor={"secondary"}/>
                <Image
                    source={require('../../../assets/patterns/02.jpg')}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        width: undefined,
                        height: undefined,
                        borderTopLeftRadius: theme.borderRadii.xl,
                        borderBottomRightRadius: theme.borderRadii.xl
                    }}/>
            </Box>
            <Box flex={1 / 3} backgroundColor={"lightBlue"}>
                <Box flex={1} backgroundColor={"secondary"} borderTopLeftRadius={"xl"}/>
            </Box>
        </Box>
    );
};

export default Background;
