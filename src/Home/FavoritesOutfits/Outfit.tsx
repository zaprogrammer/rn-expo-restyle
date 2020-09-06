import React, {useState} from 'react';
import {Box, RoundedIcon} from "../../components";
import {BorderlessButton} from "react-native-gesture-handler";

interface OutfitProps {
    outfit: {
        id: number;
        color: string;
        aspectRatio: number;
        selected: boolean;
    };
    width: number;
}

const Outfit = ({outfit, width}: OutfitProps) => {
    const [selected, setSelected] = useState(false);

    return (
        <BorderlessButton onPress={() => {
            setSelected((prev) => !prev);
            outfit.selected = !outfit.selected;
        }}>
            <Box
                borderRadius={"m"}
                marginBottom={"m"}
                alignItems={"flex-end"}
                padding={"m"}
                style={{backgroundColor: outfit.color, width, height: width * outfit.aspectRatio}}>

                {selected && (
                    <RoundedIcon backgroundColor={"primary"} color={"white"} size={24} name={"check"}/>
                )}
            </Box>
        </BorderlessButton>
    );
};

export default Outfit;
