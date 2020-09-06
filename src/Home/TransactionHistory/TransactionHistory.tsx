import React from 'react';
import {ScrollView} from "react-native";
import {Box, Header, Text} from "../../components";
import {HomeNavigationProps} from "../../components/Navigation";
import Graph, {DataPoint} from "./Graph";
import Transaction from './Transaction';

const startDate = new Date("2019-09-01").getTime();
const numberOfMonths = 6;

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

    return (
        <Box flex={1} backgroundColor={"white"}>
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
                <ScrollView>
                    {data.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction}/>
                    ))}
                </ScrollView>
            </Box>
        </Box>
    );
};

export default TransactionHistory;
