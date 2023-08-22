import react from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export const FormHolder = (props) => {
    return (
        <View>

            <View style={styles.card}>
            </View>

            <View style={styles.continue}>
            <TouchableOpacity>
            <Text style={{fontSize: 20, color:"white", textAlign: "center"}}>Continue</Text>
            </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: 'grey',
        marginHorizontal: '10%',
        marginVertical: '5%',
        borderRadius: 10,
        width: '80%',
        height: '70%',
        textAlign: "center",
        // backgroundColor: '#fff',
    },
    continue: {
        backgroundColor: 'lightgreen',
        height: 50,
        width: 150,
        textAlign: "center",
        borderRadius: 5,
        justifyContent: "center",
        marginHorizontal: '50%',
    }
})