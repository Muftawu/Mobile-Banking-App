import { useNavigation } from "@react-navigation/native";
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity, Dimensions } from "react-native";

const WelcomeScreen = () => {
    const navigation = useNavigation()

    return (
            <View style={styles.ImageWrapper}>
                <ImageBackground style={styles.Image}  resizeMode="cover" source={require("../assets/images/manATM.jpg")}>

                   <View style={{marginTop: 10}}>
                    <Text style={styles.textWelcome}>Welcome to</Text>
                    <Text style={styles.textWelcome}>Banking App</Text>
                   </View>
                   
                   <View style={{margin: 30}}>
                        <Text style={styles.textDetail}>Simple and secure with quick</Text>
                        <Text style={styles.textDetail}>access to your account instantly</Text>
                        <Text style={styles.textDetail}>instantly</Text>
                   </View>

               <View style={{position:"absolute", bottom: 0}}>
                    <TouchableOpacity style={styles.getStarted} onPress={() => navigation.navigate("account_type")}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#fff'}}>Get Started</Text>
                    </TouchableOpacity>

               </View>
                </ImageBackground>
            </View>
    )
}


const styles = StyleSheet.create({
    Image:{
        flex: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
    },
    ImageWrapper:{
       flex: 1,
    },
    textWelcome: {
        color: 'white',
        fontSize: 40,
        lineHeight: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    textDetail:{
        color: 'white',
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    getStarted:{
        backgroundColor: 'lightgreen',
        borderRadius: 6, 
        width: '80%',
        height: 60,
        marginHorizontal: '25%',
        borderColor: 'grey',
        justifyContent: "center",
        marginVertical: 20,
    }
})

export default WelcomeScreen;