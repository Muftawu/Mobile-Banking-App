import { View, Text , StyleSheet} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TransactionSendReceiveDetail } from "../components/transaction_send_receive_detail";
import { ActionButton } from "../components/action_button";
import { TouchableOpacity } from "react-native-gesture-handler";

export const TransactionDetailScreen = () => {
    const navigation = useNavigation()

    const route = useRoute()
    const {props} = route.params

    const amount = props.amount
    const type = props.type 

    
    return (
        <View>
            <TransactionSendReceiveDetail type={type} amount={amount} />

            <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <ActionButton value="Go back" />
            </TouchableOpacity>

        </View>
    )
}
