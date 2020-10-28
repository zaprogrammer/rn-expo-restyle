import React from 'react';
import {StyleSheet, View} from "react-native";
import {SLIDE_HEIGHT, width} from '../../helpers/constants';
import {Text} from "../../components";

interface SlideProps {
    title: string;
    right?: boolean;
}

const Slide = ({title, right}: SlideProps) => {

    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, {
                transform: [
                    {translateY: (SLIDE_HEIGHT - 100) / 2},
                    {translateX: right ? (width / 2 - 50) : (-width / 2 + 50)},
                    {rotate: right ? "-90deg" : "90deg"}
                ]
            }]}>
                <Text variant={"hero"}>{title}</Text>
            </View>
        </View>
    );
};

export default Slide;

const styles = StyleSheet.create({
    container: {
        width
    },
    titleContainer: {
        height: 100,
        justifyContent: "center",
    },
})
