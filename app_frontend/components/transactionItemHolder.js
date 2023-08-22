import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet, Text, TouchableOpacity  } from "react-native"

export const TransactionCard = (props) => {
        const navigation = useNavigation()

        const id = props.id
        const type = props.type 
        const screen = props.screen

        return (
                <View>
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(screen, {props})}>
                        <Text style={{padding: 10}}>
                         {type === "My Deposits" ? 
                           <Text style={{fontSize: 22, fontWeight: "bold", color: "green"}}>{id}. {type}</Text> : 
                           <Text style={{fontSize: 22, fontWeight: "bold", color: "blue"}}>{id}. {type}</Text> 
                        }
                        </Text>


                    <Text>{}</Text>
                    </TouchableOpacity>
                </View>
                
        )
    }


const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'grey',
        marginHorizontal: 15, 
        marginVertical: 10,
        height: 70,
        justifyContent: "flex-start"
    }
})

