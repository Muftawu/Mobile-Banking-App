import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export const MenuItem = (props) => {
  const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(props.name)}>
          <Text style={styles.itemText}>{props.name}</Text>
          <View style={{borderWidth: 1, borderColor: 'grey', width: 130, height: 130, borderRadius: 130/2}}>
            <Image source={props.img} style={styles.image} />
          </View>
        </TouchableOpacity>
    )
}

export const CenterMenu = (props) => {
  const navigation = useNavigation()
  const n = props.name

    return (
        <TouchableOpacity style={styles.centerItem} onPress={() => navigation.navigate(props.name, {n})}>
            <Text style={styles.itemText}>{props.name}</Text>
            <View style={{borderWidth: 1, borderColor: 'grey', width: 130, height: 130, borderRadius: 130/2}}>
            <Image source={props.img} style={styles.image} />
            </View>
      </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 40,
        // backgroundColor: 'lightgreen',
      },
      itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor:'grey'
      },
      centerItem: {
        width: 120,
        height: 160,
        borderRadius: 60,
        // backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
      },
})
