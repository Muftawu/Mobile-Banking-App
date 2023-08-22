import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from './authContext';
import { ActivityIndicator } from 'react-native';
import AppDrawer from '../navigation/drawer';
import { AccountStack } from '../navigation/stack';
import { View } from 'react-native';

const AppNav = () => {

    const { isLoading, userToken } = useContext(AuthContext);

    if (isLoading) {
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}} >
            <ActivityIndicator size={'large'} />
        </View>
    }

    return (
        <NavigationContainer>
            {userToken !== null ? <AppDrawer /> : <AccountStack /> }
        </NavigationContainer>
    )
}

export default AppNav;