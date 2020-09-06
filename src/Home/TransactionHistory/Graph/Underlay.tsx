import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text, useTheme} from "../../../components";
import {lerp} from "./Scale";

export const MARGIN = "xl";

const formatter = Intl.DateTimeFormat("en", {month: "short"});

interface UnderlayProps {
    dates: number[];
    minY: number;
    maxY: number;
    step: number;
}

const Underlay = ({dates, minY, maxY, step}: UnderlayProps) => {
    const theme = useTheme();
    const row_height = theme.spacing.m;

    return (
        <Box style={StyleSheet.absoluteFill}>
            <Box flex={1} justifyContent={"space-between"}>
                {
                    [1, 0.66, 0.33, 0].map((progress) => {
                        return (
                            <Box
                                key={progress}
                                flexDirection={"row"}
                                alignItems={"center"}
                                height={row_height}
                                style={{top: progress === 0 ? row_height / 2 : (progress === 1 ? -row_height / 2 : 0)}}
                            >
                                <Box width={MARGIN} paddingRight={"s"}>
                                    <Text color={"darkGrey"} textAlign={"right"}>
                                        {Math.round(lerp(minY, maxY, progress))}
                                    </Text>
                                </Box>
                                <Box flex={1} height={1} backgroundColor={"grey"}/>
                            </Box>
                        )
                    })
                }
            </Box>
            <Box marginLeft={MARGIN} height={theme.spacing[MARGIN]} flexDirection={"row"} alignItems={"center"}>
                {
                    dates.map((date, index) => (
                        <Box width={step}>
                            <Text key={index} color={"darkGrey"}
                                  textAlign={"center"}>{formatter.format(new Date(date))}</Text>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    );
};

export default Underlay;
