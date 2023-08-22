import { View } from "react-native"

const transactionTypes = ["My Deposits", " My Withdrawals", "My Transfers"]
const TransactionStatus = ["Completed", "In Progress"]

let status_len = TransactionStatus.length
let max = transactionTypes.length


export const RandomInt = (size) => {
    return Math.floor(Math.random() * size)
}

export const RandomAmount = () => {
    return Math.random().toPrecision(4)*100
}

export const RandomDate = () => {
    const currentDate = new Date.getDate()();

    // Extract the day, month, year, hours, and minutes
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();
    const time = currentDate.toLocaleTimeString();

    // Display the result
    // return day, month, year, time 
    // console.log(`Today is ${day} ${month} ${year}, ${time}.`);
}

// Dummy Data for Transaction History
export const TransactionHistory = [
    {id: 1, type: transactionTypes[RandomInt(max)], status: TransactionStatus[RandomInt(status_len)], amount: RandomAmount()}, 
    {id: 2, type: transactionTypes[RandomInt(max)], status: TransactionStatus[RandomInt(status_len)], amount: RandomAmount()}, 
    {id: 3, type: transactionTypes[RandomInt(max)], status: TransactionStatus[RandomInt(status_len)], amount: RandomAmount()}, 
    {id: 4, type: transactionTypes[RandomInt(max)], status: TransactionStatus[RandomInt(status_len)], amount: RandomAmount()}, 
    {id: 5, type: transactionTypes[RandomInt(max)], status: TransactionStatus[RandomInt(status_len)], amount: RandomAmount()}, 
]

export const HistoryTypes = [
    {id: 1, type: transactionTypes[0], screen:"Deposit History", status: TransactionStatus[RandomInt(status_len)]}, 
    {id: 2, type: transactionTypes[1], screen:"Withdraw History", status: TransactionStatus[RandomInt(status_len)]}, 
    {id: 3, type: transactionTypes[2], screen:"Transfer History", status: TransactionStatus[RandomInt(status_len)]}, 
]