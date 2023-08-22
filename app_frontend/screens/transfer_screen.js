import { View, StyleSheet, Button, Text, TextInput } from "react-native";
import { FormHolder } from "../components/form_holder";
import axios from "axios";
import { useContext, useState } from "react";
import { TransactionContext } from "../context/transactionsContext";
import { AuthContext } from "../context/authContext";

export const QuickTransferScreen = () => {

   const { transfer } = useContext(TransactionContext)
   const { userInfo } = useContext(AuthContext)

    const username = userInfo.username
    // console.log(username)

    const [amount, setAmount] = useState('')
    const [receiver, setReceiver] = useState('')
    const [PIN, setPIN] = useState('')
    const [accountNumber, setAccountNumber] = useState('')


    return (
        <View>
          
          <Text style={{fontSize: 20, marginTop: 20, textAlign: "center"}}>Transfer to Others</Text>

          <View style={styles.card}>

            <View style={styles.formGroup}>
                  <TextInput 
                    placeholder="Amount"   
                    value={amount}
                    keyboardType='numeric'
                    onChangeText={setAmount}  
                    style={styles.input}   
                  />
            </View>

            <View style={styles.formGroup}>
                  <TextInput 
                    placeholder="Account Number"   
                    value={accountNumber}
                    keyboardType='numeric'
                    onChangeText={setAccountNumber}  
                    style={styles.input}   
                  />
            </View>
            <Text style={{textAlign: "center"}}>Please enter account number</Text>

            <View style={styles.formGroup}>
                  <TextInput 
                    placeholder="Receiver"   
                    value={receiver}
                    onChangeText={setReceiver}  
                    style={styles.input}   
                  />
            </View>
            <Text style={{textAlign: "center"}}>Please specify receiver</Text>

            <View style={styles.formGroup}>
                  <TextInput 
                    placeholder="Pin"
                    keyboardType='numeric'   
                    value={PIN}
                    onChangeText={setPIN}  
                    style={styles.input}   
                    secureTextEntry
                  />
            </View>
            <Text style={{textAlign: "center"}}>Please enter your PIN</Text>
            
          </View>

            <View style={{width: '50%',  backgroundColor: "lightgreen", marginHorizontal: '40%'}}>
              <Button title="Continue" onPress={() => transfer(username, receiver, accountNumber, amount, PIN)} color="lightgreen"  />
            </View>

                      
        </View>
    )
}

const styles = StyleSheet.create({
  card: {
      borderWidth: 2,
      borderColor: 'grey',
      marginHorizontal: '5%',
      marginVertical: '10%',
      borderRadius: 10,
      width: '85%',
      height:'62%',
      textAlign: "center",
      backgroundColor: '#fff',
  },
  formGroup:{
    width: '90%',
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    padding: 10,
    marginBottom: 10,
    borderBottomColor: '#888',
  },
})
