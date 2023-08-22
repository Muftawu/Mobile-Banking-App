import { View, Text} from "react-native";
import { useContext, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { AuthContext, BANK_API } from "../context/authContext";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";

const withdraw_history_api = "bank/withdraw_history/"

export const WithdrawHistoryScreen = () => {

    const { userInfo } = useContext(AuthContext)
    const [data, setData] = useState('')
    
    const route = useRoute()
    const { props } = route.params
    const title = props.type

    const username = userInfo.username
    const PIN = userInfo.PIN
    // console.log("user info from deposit history screen", userInfo)

    useEffect(() => {
        fetch_withdraw_history(username, PIN)
    }, [])

     // Fetch Withdraw history
     const fetch_withdraw_history = async (username, PIN) => {
        try{
            const response = await BANK_API.post(withdraw_history_api, {username, PIN})
            history = response.data.history
            console.log(history)
            setData(history)
        }
        catch(error) {
            console.log(`Error fetching withdraw history ${error}`)
        }
    }

    const render_withdraw_history = ({item}) => {
        return (
            <View>
                {item ? 
                <TouchableOpacity style={styles.card}>
                    <Text style={{fontSize: 20, color:'red', fontWeight: "bold"}} key={Math.random()*10}>Amount: -${item.amount}</Text>
                    <Text style={{fontSize: 20, paddingTop: 5}}>Timestamp {item.created.slice(0, 10)}</Text>
                </TouchableOpacity> :
                <Text style={{fontSize: 20, textAlign: "center"}}>No withdraw history available</Text>
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
                    renderItem={render_withdraw_history}
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