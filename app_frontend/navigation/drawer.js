import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import {AccountStack, CustomerServiceStack, HomeStack, SettingsStack } from './stack';
import { SafeAreaView, View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  
  const { logout } = useContext(AuthContext)
  
  return (
    <Drawer.Navigator initialRouteName='Account' screenOptions={{headerShown: false}}

    drawerContent={(props) => {
      return (
        <SafeAreaView style={{flex: 1, paddingTop: 20, backgroundColor: "#99f6e4"}}>
          <View style={{justifyContent: "center", alignItems: "center", height: 140}}>
            <Image style={styles.logo} 
                    source={require("../assets/bank_icon.png")}
                    />
          </View>
          <DrawerItemList  {...props} />
          <Button  title="Logout" onPress={() => {logout()}} />
        </SafeAreaView> 
      )
    }}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Settings" component={SettingsStack} />
      <Drawer.Screen name="Customer Service" component={CustomerServiceStack} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    resizeMode:'contain',
  }
})


export default AppDrawer