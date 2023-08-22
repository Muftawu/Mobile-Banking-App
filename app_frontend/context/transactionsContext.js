import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { BANK_API } from "./authContext";
import { View } from "react-native";
import { Activity } from "./utils";

const access_token = AsyncStorage.getItem('@access_token')

const deposit_api = "bank/deposit/"
const withdraw_api = 'bank/withdraw/'
const transfer_api = 'bank/transfer/'

const withdraw_history_api = "bank/withdraw_history"
const transfer_history_api = "bank/transfer_history"

console.log(access_token)

export const TransactionContext = createContext()

export const TransactionProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false)

    const deposit = async (username, amount, PIN) => {
        try{
            console.log("Depositing", username, amount, PIN)
            setIsLoading(true)
            const response = await BANK_API.post(deposit_api, {username, amount, PIN})
            console.log("Deposit sucessful ", response)
            alert(response.data.message)
        }catch(error) {
            setIsLoading(true)
            alert("Transaction Error. Invalid PIN. Please enter the correct PIN")
            console.log(`Error depositing into account ${error}`)
        }

    }

    const withdraw = async (username, amount, PIN) => {
        try{
            console.log("Withdrawing", username, amount, PIN)
            setIsLoading(true)
            const response = await BANK_API.post(withdraw_api, {username, amount, PIN})
            console.log("Withdraw sucessful ", response.data)
            alert(response.data.message)
        }catch(error) {
            console.log(error)
            alert("Invalid PIN. Please try again.")
            console.log(`Error withdrawing from account. ${error}`)
        }

    }

    const transfer = async (username, account_name, account_number, amount, PIN) => {
        try{
            console.log(username, account_name, amount, account_number, PIN)
            const response = await BANK_API.post(transfer_api, {username, account_name, account_number, amount, PIN})
            console.log(response.data)
            alert(response.data.Transfer)
        }
        catch(error) {
            alert("Invalid PIN. Please try again.")
            console.log(`Error during quick transfer ${error}`)
        }
    }

    //  Withdraw history
    const withdraw_history = async (username, PIN) => {
        try{

        }
        catch(error) {
            console.log(`Error fetching deposit history ${error}`)
        }
    }

    // Transfer history 
    const transfer_history = async () => {
        try{

        }
        catch(error) {
            console.log(`Error fetching deposit history ${error}`)
        }
    }


    return (
        <TransactionContext.Provider value={{
            deposit,
            withdraw,
            transfer,
            transfer_history,
            withdraw_history
        }}>
            {children}
        </TransactionContext.Provider>
    )
}