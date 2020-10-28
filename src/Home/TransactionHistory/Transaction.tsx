import React from 'react';
import {DataPoint} from "./Graph";
import {Box, Text} from "../../components";
import moment from "moment";

interface TransactionProps {
    transaction: DataPoint;
}

const Transaction = ({transaction}: TransactionProps) => {
    const transactionDate = moment(transaction.date).format("DD MMMM, YYYY");

    return (
        <Box flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Box>
                <Box flexDirection={"row"} alignItems={"center"} marginBottom={"s"} marginTop={"l"}>
                    <Box backgroundColor={transaction.color} marginRight={"s"}
                         style={{width: 10, height: 10, borderRadius: 5}}/>
                    <Text variant={"title3"}>{`#${transaction.id}`}</Text>
                </Box>
                <Text color={"darkGrey"}>
                    {`$${transaction.value} - ${transactionDate}`}
                </Text>

            </Box>
            <Box>
                <Text color={"secondary"} variant={"button"}>See more</Text>
            </Box>
        </Box>
    );
};

export default Transaction;
