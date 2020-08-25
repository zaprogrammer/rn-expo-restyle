import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {BORDER_RADIUS, SLIDE_HEIGHT, width} from '../../helpers/constants';

interface SlideProps {
    title: string;
    right?: boolean;
    picture: number;
}

const Slide = ({title, right, picture}: SlideProps) => {

    return (
        <View style={styles.container}>
            <View style={styles.underlay}>
                <Image source={picture} style={styles.picture}/>
            </View>
            <View style={[styles.titleContainer, {
                transform: [
                    {translateY: (SLIDE_HEIGHT - 100) / 2},
                    {translateX: right ? (width / 2 - 50) : (-width / 2 + 50)},
                    {rotate: right ? "-90deg" : "90deg"}
                ]
            }]}>
                <Text style={styles.title}>{title}</Text>
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
    title: {
        fontSize: 80,
        color: "white",
        textAlign: "center",
        lineHeight: 80,
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        top: BORDER_RADIUS / 1.25,
        borderBottomRightRadius: BORDER_RADIUS,
        width: undefined,
        height: undefined
    },
})
