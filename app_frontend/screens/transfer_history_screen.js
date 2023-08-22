import { View, Text} from "react-native";
import { useContext, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { AuthContext, BANK_API } from "../context/authContext";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";

const transfer_history_api = "bank/transfer_history/"

export const TransferHistoryScreen = () => {

    const { userInfo } = useContext(AuthContext)
    const [data, setData] = useState('')
    
    const route = useRoute()
    const { props } = route.params
    const title = props.type

    const username = userInfo.username
    const PIN = userInfo.PIN
    // console.log("user info from deposit history screen", userInfo)

    useEffect(() => {
        fetch_transfer_history(username, PIN)
    }, [])

     // Fetch Transfer history
     const fetch_transfer_history = async (username, PIN) => {
        try{
            const response = await BANK_API.post(transfer_history_api, {username, PIN})
            history = response.data.history
            console.log(history)
            setData(history)
        }
        catch(error) {
            console.log(`Error fetching deposit history ${error}`)
        }
    }

    const render_transfer_history = ({item}) => {
        return (
            <View>
                {item ? 
                <TouchableOpacity style={styles.card}>
                    <Text style={{fontSize: 20, color:'blue', fontWeight: "bold"}}>{item.id}. Amount: +${item.amount}</Text>
                    <Text style={{fontSize: 20, paddingTop: 5}}>Timestamp: {item.created.slice(0, 10)}</Text>
                    <Text style={{fontSize: 20, paddingTop: 5}}>Account No: {item.account_number}</Text>
                    <Text style={{fontSize: 20, paddingTop: 5}}>Account Name: {item.account_name}</Text>
                </TouchableOpacity> :
                <Text style={{fontSize: 20, textAlign: "center"}}>No Transfer history available</Text>
            }   
            </View>
        )
    }


    return (
        <View>
                <Text style={{textAlign: "center", fontWeight:"bold", fontSize: 20, marginVertical: 20}}>{title}</Text>

                <FlatList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={render_transfer_history}
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
        height: 160,
        justifyContent: "flex-start"
    }
})