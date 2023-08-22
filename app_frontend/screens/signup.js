import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";
import React, { useContext, useState } from "react";
import axios from "axios";
import { ActionButton } from "../components/action_button";
import { AuthContext } from "../context/authContext";

const SignUpScreen = () => {

    const { register } = useContext(AuthContext)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [PIN, setPIN] = useState('')

    return (
        <View>
          
          <Text style={{fontSize: 20, marginTop: 20, textAlign: "center"}}>Sign Up Screen </Text>

          <View style={styles.card}>

            <View style={styles.formGroup}>
                  <TextInput 
                    placeholder="Username"   
                    value={username}
                    onChangeText={setUsername}  
                    style={styles.input}   
                  />
            </View>

            <View style={styles.formGroup}>
                  <TextInput 
                      placeholder="Email"
                      value={email}
                      onChangeText={setEmail}
                      style={styles.input}
                  />
            </View>

            <View style={styles.formGroup}>
                  <TextInput 
                      placeholder="PIN"
                      value={PIN}
                      keyboardType="numeric"
                      onChangeText={setPIN}
                      style={styles.input}
                  />
            </View>

            <View style={styles.formGroup}>
                  <TextInput 
                      placeholder="Password"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                      style={styles.input}
                  />
            </View>
            
          </View>

          <View style={{width: '50%',  backgroundColor: "lightgreen", marginHorizontal: '40%'}}>
              <Button title="Continue" onPress={() => {register(username, email, PIN, password)}} color="lightgreen"  />
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
      height:'70%',
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
    // borderBottomWidth: 1,
    borderBottomColor: '#888',
  },
})

export default SignUpScreen;