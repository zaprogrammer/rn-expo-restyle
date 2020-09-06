import React, {useState} from 'react';
import {Box, Header} from "../../components";
import {HomeNavigationProps} from "../../components/Navigation";
import {useTransition} from "react-native-redash";
import {interpolate} from "react-native-reanimated";
import Background from './Background';
import Card from './Card';
import Categories from './Categories';

const cards = [
    {
        index: 3,
        source: require('../../../assets/4.png'),
    },
    {
        index: 2,
        source: require('../../../assets/3.png'),
    },
    {
        index: 1,
        source: require('../../../assets/2.png'),
    },
    {
        index: 0,
        source: require('../../../assets/1.png'),
    },
];

const step = 1 / (cards.length - 1);

const OutfitIdeas = ({navigation}: HomeNavigationProps<"OutfitIdeas">) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const aIndex = useTransition(currentIndex);

    return (
        <Box flex={1} backgroundColor={"white"}>
            <Header
                left={{icon: "menu", onPress: () => navigation.openDrawer()}}
                title={"Outfit Ideas"}
                right={{icon: "shopping-bag", onPress: () => true}}
                dark
            />
            <Categories/>
            <Box flex={1}>
                <Background/>
                {
                    cards.map(({index, source}) => index >= currentIndex && (
                        <Card
                            key={index}
                            position={interpolate(index, {
                                inputRange: [aIndex, cards.length - 1],
                                outputRange: [0, 1]
                            })}
                            onSwipe={() => setCurrentIndex((prev) => prev + 1)}
                            {...{source, step}}
                        />
                    ))
                }
            </Box>
        </Box>
    );
};

export default OutfitIdeas;
