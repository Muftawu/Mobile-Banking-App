import axios from "axios";
import { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { AuthContext } from "../context/authContext";

const options = [{id: 1, name: "Change App Experience"}, {id: 2, name: "Theme Settings"}, {id: 3, name:"Request Custom App feature"}]

export const SettingsScreen = () => {

    const { userInfo } = useContext(AuthContext)

    console.log(userInfo)

    return (
        <View>
          
          <View>
            <Text style={{fontSize: 20, textAlign: "center", margin: 10}}>Settings</Text>

            <View>
            {options.map((option) => (
                 <TouchableOpacity style={styles.manager}>
                    <Text style={{borderBottomColor: 'grey', textAlign: 'center', fontSize: 20, justifyContent: "center", paddingTop: 12}}>{option.name}</Text>
            </TouchableOpacity>
            ))}
            </View>

            <Text style={{marginVertical: 50, fontSize: 18, textAlign: "center", color: "green"}}>More features are under way.</Text>
            
          </View>

          
            
        </View>
    )
}

const styles = StyleSheet.create({
  manager: {
      borderBottomColor: 'grey',
      borderRadius: 10,
      borderWidth: 1,
      marginHorizontal: '5%',
      marginVertical: '2%',
      height: 60,
      textAlign: "center",
  }
})

