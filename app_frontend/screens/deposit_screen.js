import { View, StyleSheet, Button, Text, TextInput } from "react-native";
import { FormHolder } from "../components/form_holder";
import axios from "axios";
import { useContext, useState } from "react";
import { TransactionContext } from "../context/transactionsContext";
import { AuthContext } from "../context/authContext";


export const DepositScreen = () => {

  const { deposit } = useContext(TransactionContext)
  const { userInfo } = useContext(AuthContext)

  const username = userInfo.username

  const [amount, setAmount] = useState('')
  const [pin, setPin] = useState('')
   
    return (
        <View>
          
          <Text style={{fontSize: 20, marginTop: 20, textAlign: "center"}}>Account Deposit</Text>

          <View style={styles.card}>

            <View style={styles.formGroup}>
                  <TextInput 
                    placeholder="Amount"   
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={text => setAmount(text)}  
                    style={styles.input}   
                  />
            </View>
            <Text style={{textAlign: "center"}}>Please enter amount to withdraw</Text>

            <View style={styles.formGroup}>
                  <TextInput 
                    placeholder="Pin"   
                    keyboardType="numeric"
                    value={pin}
                    onChangeText={text => setPin(text)}  
                    style={styles.input}   
                    secureTextEntry
                  />
            </View>
            <Text style={{textAlign: "center"}}>Please enter your PIN</Text>

            
          </View>

            <View style={{width: '50%',  backgroundColor: "lightgreen", marginHorizontal: '40%'}}>
              <Button title="Continue" onPress={() => {deposit(username, amount, pin)}} color="lightgreen"  />
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
      height:'50%',
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
