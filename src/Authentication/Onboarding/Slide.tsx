import React from 'react';
import {Image, ImageRequireSource, StyleSheet, View} from "react-native";
import {SLIDE_HEIGHT, width} from '../../helpers/constants';
import {Text} from "../../components";

interface SlideProps {
    title: string;
    right?: boolean;
    picture: {
        src: ImageRequireSource;
        width: number;
        height: number;
    };
}

const Slide = ({title, right, picture}: SlideProps) => {

    return (
        <View style={styles.container}>
            <View style={styles.underlay}>
                <Image source={picture.src}
                       style={{
                           width,
                           height: (width * picture.height) / picture.width
                       }}
                />
            </View>
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
    underlay: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: "flex-end",
    },
})
