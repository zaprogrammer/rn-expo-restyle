import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Button from "../../components/Button";

interface SubslideProps {
    subTitle: string;
    description?: string;
    last?: boolean;
    onPress: () => void;
}

const Subslide = ({subTitle, description, last, onPress}: SubslideProps) => {

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>{subTitle}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button
                label={last ? "Let's get started" : "Next"}
                variant={last ? "primary" : "default"}
                {...{onPress}}/>
        </View>
    );
};

export default Subslide;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 44
    },
    subtitle: {
        fontSize: 24,
        color: "#0C0D34",
        lineHeight: 30,
        marginBottom: 12,
        fontWeight: "bold",
        textAlign: "center",
    },
    description: {
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 24,
        color: "#0C0D34",
        textAlign: "center",
        marginBottom: 40,
    }
})
