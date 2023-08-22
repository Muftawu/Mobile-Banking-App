import { View, Text } from "react-native";
import { TransactionItemList } from "../components/transactionItemList";
import { HistoryTypes } from "../tinyDB/transHistory";
import { DepositHistoryScreen } from "./deposit_history_screen";

export const TransactionHistoryScreen = () => {

    return (
        <View>
            <TransactionItemList data={HistoryTypes} />
        </View>
    )
    
}
