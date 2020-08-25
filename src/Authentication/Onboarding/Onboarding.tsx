import React, {useRef} from 'react';
import {StyleSheet, View} from "react-native";
import Animated, {divide, multiply} from 'react-native-reanimated';
import {interpolateColor, useScrollHandler} from "react-native-redash";
import {BORDER_RADIUS, SLIDE_HEIGHT, width} from '../../helpers/constants';
import Slide from "./Slide";
import Subslide from "./Subslide";
import Dot from "../../components/Dot";
import {slides} from "../../model/Slides";

const Onboarding = () => {
    const scroll = useRef<Animated.ScrollView>(null);
    const {scrollHandler, x} = useScrollHandler();
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color),
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, {backgroundColor}]}>
                <Animated.ScrollView horizontal
                                     ref={scroll}
                                     snapToInterval={width}
                                     decelerationRate="fast"
                                     showsHorizontalScrollIndicator={false}
                                     bounces={false}
                                     {...scrollHandler}>
                    {slides.map(({title, picture}, index) => (
                        <Slide key={index} {...{title, picture}} right={!!(index % 2)}/>
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor}}/>
                <View style={styles.footerContent}>
                    <View style={styles.pagination}>
                        {slides.map((_, index) => (
                            <Dot key={index} currentIndex={divide(x, width)} {...{index}}/>
                        ))}
                    </View>
                    <Animated.View style={{
                        flex: 1,
                        flexDirection: "row",
                        width: width * slides.length,
                        transform: [{translateX: multiply(x, -1)}]
                    }}>
                        {slides.map(({subTitle, description}, index) => (
                            <Subslide
                                key={index}
                                onPress={() => {
                                    if (scroll.current) {
                                        scroll.current
                                            .getNode()
                                            .scrollTo({x: width * (index + 1), animated: true});
                                    }
                                }}
                                last={index === slides.length - 1}
                                {...{subTitle, description}}/>
                        ))}
                    </Animated.View>
                </View>
            </View>
        </View>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomEndRadius: BORDER_RADIUS
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flex: 1,
        backgroundColor: "white",
        borderTopStartRadius: BORDER_RADIUS
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: BORDER_RADIUS / 1.25,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
});
