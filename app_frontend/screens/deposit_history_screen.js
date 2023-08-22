import { View, Text} from "react-native";
import { useContext, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { AuthContext, BANK_API } from "../context/authContext";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";

const deposit_history_api = "bank/deposit_history/"

export const DepositHistoryScreen = () => {

    const { userInfo } = useContext(AuthContext)
    const [data, setData] = useState('')
    
    const route = useRoute()
    const { props } = route.params
    const title = props.type

    const username = userInfo.username
    const PIN = userInfo.PIN
    // console.log("user info from deposit history screen", userInfo)

    useEffect(() => {
        fetch_deposit_history(username, PIN)
    }, [])

     // Fetch Deposit history
     const fetch_deposit_history = async (username, PIN) => {
        try{
            const response = await BANK_API.post(deposit_history_api, {username, PIN})
            history = response.data.history
            console.log(history)
            setData(history)
        }
        catch(error) {
            console.log(`Error fetching deposit history ${error}`)
        }
    }

    const render_deposit_history = ({item}) => {
        return (
            <View>
                <TouchableOpacity style={styles.card}>
                    <Text style={{fontSize: 20, color:'green', fontWeight: "bold"}}> Amount: +${item.amount}</Text>
                    <Text style={{fontSize: 20, paddingTop: 5}}>Timestamp {item.created.slice(0, 10)}</Text>
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <View>
                <Text style={{textAlign: "center", fontWeight:"bold", fontSize: 20, marginVertical: 20}}>{title}</Text>

                <FlatList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={render_deposit_history}
                    onRefresh={false}
                />

                <Text>
                    
                </Text>

            </View>

    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'grey',
        marginHorizontal: 15, 
        marginVertical: 10,
        height: 80,
        justifyContent: "flex-start"
    }
})