import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { FormHolder } from "../components/form_holder";
import { useContext, useEffect, useState } from "react";
import { AuthContext, BANK_API } from "../context/authContext";
import { FlatList } from "react-native-gesture-handler";

const account_detials_api = "bank/get_account_details/"

export const AccountManagerScreen = () => {
    
    const [account_detial, setAccountDetails] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [accountBalance, setAccountBalance] = useState('')
    const [email, setEmail] = useState('')

    const { userInfo } = useContext(AuthContext)
    // console.log(userInfo)

    const username = userInfo.username
    const PIN = userInfo.PIN
    console.log(userInfo)

    useEffect(() => {
        fetch_account_details(username, PIN)
    }, [])

    const fetch_account_details = async () => {
        try{
            const response = await BANK_API.post(account_detials_api, {username, PIN})
            const details = response.data.details
            setAccountBalance(details.balance)
            setAccountNumber(details.account_number)
            setEmail(details.email)
            console.log('Account details', details)
        }
        catch (error) {
            console.log('Error fetching account details', error)
        }
    }
    
    return (
        <View>
                <Text style={{textAlign: "center", fontWeight:"bold", fontSize: 20, marginVertical: 20}}>My Account</Text>

                <TouchableOpacity style={styles.card}>
                    <Text style={{fontSize: 20, color:'blue', fontWeight: "bold",  textAlign: "center"}}>{username}</Text>
                    <Text style={{fontSize: 20, paddingTop: 5, textAlign: "center"}}>Username</Text>
                </TouchableOpacity>    

                <TouchableOpacity style={styles.card}>
                    <Text style={{fontSize: 20, color:'blue', fontWeight: "bold",  textAlign: "center"}}>{accountNumber}</Text>
                    <Text style={{fontSize: 20, paddingTop: 5,  textAlign: "center"}}>Account Number</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.card}>
                    <Text style={{fontSize: 20, color:'blue', fontWeight: "bold",  textAlign: "center"}}>${accountBalance}</Text>
                    <Text style={{fontSize: 20, paddingTop: 5,  textAlign: "center"}}>Account Balance</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.card}>
                    <Text style={{fontSize: 20, color:'blue', fontWeight: "bold", textAlign: "center"}}>{email}</Text>
                    <Text style={{fontSize: 20, paddingTop: 5,  textAlign: "center"}}>Email</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.card}>
                    <Text style={{fontSize: 20, color:'blue', textAlign: "center", fontWeight: "bold"}}>Active</Text>
                    <Text style={{fontSize: 15, paddingTop: 5,  textAlign: "center"}}>Account Status</Text>
                </TouchableOpacity>         

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
        height: 75,
        justifyContent: "flex-start"
    }
})