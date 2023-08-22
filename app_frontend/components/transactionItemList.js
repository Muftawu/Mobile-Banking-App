import { View, StyleSheet, FlatList, Text } from "react-native"
import { TransactionCard } from "../components/transactionItemHolder"

export const TransactionItemList = (props) => {

        const data = props.data

        const renderTransactionItem = ({item}) => {
            return (
                <View>
                    <TransactionCard id={item.id} type={item.type} status={item.status} amount={item.amount} screen={item.screen} />
                </View>
            )
        }

        return (
            <View>
                <Text style={{textAlign: "center", fontWeight:"bold", fontSize: 20, marginVertical: 20}}>My Transactions</Text>
                <FlatList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={renderTransactionItem}
                    onRefresh={false}
                />
            </View>
    )
}
