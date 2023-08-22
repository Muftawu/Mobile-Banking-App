import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const ActionButton = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {}}>
                <Text style={{fontSize: 20, textAlign: "center", color: "white"}}>{props.value}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
            backgroundColor: 'lightgreen',
            height: 50,
            width: 150,
            textAlign: "center",
            borderRadius: 5,
            justifyContent: "center",
            marginHorizontal: '50%',
        }
})