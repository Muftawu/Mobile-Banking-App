import { View, Text, StyleSheet } from "react-native"
import { color } from "react-native-reanimated"

export const TransactionSendReceiveDetail = (props) => {
    const mydate = new Date()

    const type = props.type
    const amount = props.amount
    const status = props.status

    return (
        <View>
        <Text style={{fontSize:20, fontWeight: "bold", textAlign: "center", margin: 20}}>Receipt for {type}</Text>
        <Text style={{fontSize:20, textAlign: "center"}}>Issued on {mydate.getDay()}-{mydate.getMonth()}-{mydate.getFullYear()}</Text>

       <View style={styles.card}>
                <Text style={styles.info}>Transaction ID: {}</Text>
                <Text style={styles.info}>Amount: <Text style={{fontWeight: "bold"}}>$ {amount}</Text></Text>
                
                {status === "Completed" ? <Text style={styles.info}>Status: <Text style={{color: "green", fontWeight: "bold"}}>{status}</Text></Text>: 
                        <Text style={styles.info}>Status: <Text style={{color: "red", fontWeight: "bold"}}>{status}</Text></Text>
                    }
                
                {type === "Received" ?

                    <Text style={{margin: 10}}>
                        {type === "Received"  ? <Text style={styles.info}>From: </Text> : 
                        <Text style={styles.info}>To: </Text>
                        }
                    </Text> :

                <Text style={{margin: 10}}>
                    {type === "Withdraw" ? <Text style={styles.info}>From: </Text> : 
                    undefined
                    }

                </Text>

            }
            

            
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
        height: '50%',
        textAlign: "center",
        backgroundColor: '#fff',
    },
    info:{
        margin: 10,
        fontSize: 20,
    },
})