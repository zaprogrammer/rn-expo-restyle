import React, {useState} from 'react';
import {Box, Text} from "../../components";
import {BorderlessButton} from "react-native-gesture-handler";
import {StyleSheet} from "react-native";

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

interface CategoryProps {
    category: {
        id: string;
        color: string;
        title: string;
    };
}

const Category = ({category: {color: backgroundColor, title}}: CategoryProps) => {
    const [selected, setSelected] = useState<boolean>(false);

    return (
        <BorderlessButton onPress={() => setSelected((prev) => !prev)}>
            <Box marginLeft={"m"} marginTop={"s"} alignItems={"center"}>
                <Box
                    width={OUTER_RADIUS * 2}
                    height={OUTER_RADIUS * 2}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    {selected && (
                        <Box
                            borderWidth={2}
                            style={{
                                ...StyleSheet.absoluteFillObject,
                                borderRadius: OUTER_RADIUS,
                                borderColor: backgroundColor,
                            }}
                        />
                    )}
                    <Box
                        width={INNER_RADIUS * 2}
                        height={INNER_RADIUS * 2}
                        style={{
                            borderRadius: INNER_RADIUS,
                            backgroundColor
                        }}
                    />
                </Box>
                <Text style={{fontSize: 12}} numberOfLines={1} textAlign={"center"} marginTop={"s"}>
                    {title}
                </Text>
            </Box>
        </BorderlessButton>
    );
};

export default Category;
