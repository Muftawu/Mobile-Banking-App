import { View, StyleSheet, Button, Text, TextInput } from "react-native";
import { FormHolder } from "../components/form_holder";
import { useContext, useState } from "react";
import { TransactionContext } from "../context/transactionsContext";
import { AuthContext } from "../context/authContext";
export const WithdrawalScreen = () => {

    const { withdraw } = useContext(TransactionContext)
    const { userInfo } = useContext(AuthContext)

    const username = userInfo.username
    const [amount, setAmount] = useState('')
    const [pin, setPin] = useState('')

    return (
        <View>
          
          <Text style={{fontSize: 20, marginTop: 20, textAlign: "center"}}>Account Withdrawal</Text>

          <View style={styles.card}>

            <View style={styles.formGroup}>
                  <TextInput 
                    placeholder="Amount"   
                    value={amount}
                    onChangeText={setAmount} 
                    keyboardType="numeric" 
                    style={styles.input}   
                  />
            </View>
            <Text style={{textAlign: "center"}}>Please enter amount to withdraw</Text>

            <View style={styles.formGroup}>
                  <TextInput 
                    placeholder="Pin"   
                    value={pin}
                    onChangeText={setPin}  
                    style={styles.input} 
                    keyboardType="numeric"  
                    secureTextEntry
                  />
            </View>
            <Text style={{textAlign: "center"}}>Please enter your PIN</Text>
            
          </View>

            <View style={{width: '50%',  backgroundColor: "lightgreen", marginHorizontal: '40%'}}>
              <Button title="Continue" onPress={() => {withdraw(username, amount, pin)}} color="lightgreen"  />
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
      height:'52%',
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
