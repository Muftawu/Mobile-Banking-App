import { View, Text, Image, StyleSheet, Button, Dimensions, TouchableOpacity } from "react-native";
import { LoremIpsum } from "lorem-ipsum";
import { useNavigation } from "@react-navigation/native";
import {HeaderBackButton} from "@react-navigation/elements"
import { Ionicons } from "@expo/vector-icons";
import { useLayoutEffect } from "react";
import axios from "axios";


const AccountType = () => {
    const navigation = useNavigation()

    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4
        },
        wordsPerSentence: {
          max: 16,
          min: 4
        }
      });

      useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Account Status",
            headerLeft: () => (
                headerTintColor="white",
                <HeaderBackButton onPress={() => navigation.goBack()} />
            ),
            headerRight: () => (
                headerTintColor="white",
               <View style={{paddingRight: 10}}>
                 <Ionicons name='chatbox' onPress={() => alert("Chatbot temporarily down. Please try again later.")} size={32} color='white'/>
               </View>
            )
        })
   }, [])



    return (
        <View>
            <View style={styles.coverImage}>
                <Image style={styles.image} source={require("../assets/images/manvisa.jpg")}/>
            </View>

            <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center", paddingTop: 10}}>Let's get started</Text>

            <Text style={{fontSize: 20, textAlign: "center", paddingTop: 20, marginHorizontal: 10}}>{lorem.generateSentences(2)}</Text>
            
            <View style={{position:"relative", bottom: 25, paddingTop: 70}}>
                <TouchableOpacity style={styles.oldAccountButton}
                    onPress={() => navigation.navigate("Login")}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#fff'}}>Already have an account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.newAccountButton} 
                    onPress={() => navigation.navigate("Signup")}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#fff'}}>I'm new here</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    oldAccountButton:{
        backgroundColor: 'lightgreen',
        borderRadius: 6, 
        width: '75%',
        height: 60,
        padding: 15,
        marginBottom: 40,
        borderColor: 'grey',
        marginHorizontal: '15%',
    },
    newAccountButton:{
        backgroundColor: 'lightgreen',
        borderRadius: 6, 
        width: '75%',
        height: 60,
        padding: 15,
        // marginBottom: 40,
        borderColor: 'grey',
        marginHorizontal: '15%',
    },
    image:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width*0.8,
    }
})

export default AccountType;