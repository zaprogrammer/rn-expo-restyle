import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet} from "react-native";
import {Box, Header, makeStyle, Text} from "../../components";
import {HomeNavigationProps} from "../../components/Navigation";
import Graph, {DataPoint} from "./Graph";
import Transaction from './Transaction';
import {Theme} from "../../components/Theme";
import TopCurve from "./TopCurve";

const startDate = new Date("2019-09-01").getTime();
const numberOfMonths = 6;
const footerHeight = Dimensions.get("window").width / 3;
const aspectRatio = 3;

const data: DataPoint[] = [
    {
        date: new Date("2019-11-01").getTime(),
        value: 139.42,
        color: "orange",
        id: 254674,
    },
    {
        date: new Date("2019-12-01").getTime(),
        value: 281.23,
        color: "yellow",
        id: 254673,
    },
    {
        date: new Date("2020-02-01").getTime(),
        value: 198.54,
        color: "primary",
        id: 254672,
    },
]

const TransactionHistory = ({navigation}: HomeNavigationProps<"FavoritesOutfits">) => {
    const styles = useStyles();

    return (
        <Box flex={1} backgroundColor={"background"}>
            <Header left={{icon: "menu", onPress: () => navigation.openDrawer()}}
                    title={"Transaction History"}
                    right={{icon: "share", onPress: () => true}}
                    dark
            />
            <Box padding={"m"} flex={1}>
                <Box flexDirection={"row"} justifyContent={"space-between"} alignItems={"flex-end"}>
                    <Box>
                        <Text variant={"header"} color={"secondary"} opacity={0.3}>TOTAL SPENT</Text>
                        <Text variant={"title1"}>$610,19</Text>
                    </Box>
                    <Box
                        backgroundColor={"primaryLight"}
                        borderRadius={"m"}
                        padding={"s"}>
                        <Text color={"primary"}>All Time</Text>
                    </Box>
                </Box>
                <Graph {...{data}} startDate={startDate} numberOfMonths={numberOfMonths}/>
                <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                    {data.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction}/>
                    ))}
                </ScrollView>
                <TopCurve footerHeight={footerHeight}/>
                <Box
                    position={"absolute"} left={0} right={0} bottom={0}
                    aspectRatio={aspectRatio}
                >
                    <Image
                        style={styles.footer}
                        source={require('../../../assets/patterns/03.jpg')}/>
                </Box>
            </Box>
        </Box>
    );
};

export default TransactionHistory;

const useStyles = makeStyle((theme: Theme) => ({
    footer: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderTopLeftRadius: theme.borderRadii.xl
    },
    scrollView: {
        paddingBottom: footerHeight,
    }
}));
