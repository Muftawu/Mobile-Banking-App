import { View, StyleSheet, Button, Text, TextInput } from "react-native";
import { FormHolder } from "../components/form_holder";
import axios from "axios";
import { useState } from "react";

const customer_service_api = ""

export const CustomerServiceScreen = () => {

    const [complaint, setComplaint] = useState('')
    const [success, setSuccess] = useState('')

    const handleCustomerService = async () => {
        try{
            const response = axios.post(deposit_api, {amount, pin})
            setSuccess(response)
            console.log(response)
        }
        catch (error) {
            console.log("Deposit Error", error)
        }
    }

    if (success) {
       return (
        alert("Thanks for reaching out. Our Customer service agents will reach out to you very soon.")
       )
    }

    return (
        <View>
          
          <Text style={{fontSize: 20, marginTop: 20, textAlign: "center"}}>Talk to Us. Lets hear your concerns</Text>

          <View style={styles.card}>

            <View style={styles.formGroup}>
                  <TextInput 
                    placeholder="How can we be of service?"   
                    value={complaint}
                    onChangeText={setComplaint}  
                    style={styles.input}   
                  />
            </View>
            <Text style={{textAlign: "center"}}>Please tell us how we can assit you</Text>

            
          </View>

            <View style={{width: '50%',  backgroundColor: "lightgreen", marginHorizontal: '40%'}}>
              <Button title="Continue" onPress={handleCustomerService} color="lightgreen"  />
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
    height: 100,
  },
})
