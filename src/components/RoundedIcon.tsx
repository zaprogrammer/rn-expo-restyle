import React from 'react';
import {Feather as Icon} from "@expo/vector-icons";
import {Box, Text, Theme} from "./Theme";

export interface RoundedIconProps {
    name: string;
    size: number;
    color: keyof Theme["colors"] | string;
    backgroundColor: keyof Theme["colors"];
}

const RoundedIcon = ({name, size, color, backgroundColor}: RoundedIconProps) => {

    const iconSize = size * 0.7;

    return (
        <Box
            height={size}
            width={size}
            justifyContent={"center"}
            alignItems={"center"}
            style={{borderRadius: size / 2}}
            {...{backgroundColor}}>
            <Text style={{width: iconSize, height: iconSize}}>
                <Icon
                    {...{name, color}}
                    size={iconSize}/>
            </Text>
        </Box>
    );
};

export default RoundedIcon;
