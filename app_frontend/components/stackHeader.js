import { Ionicons } from "@expo/vector-icons"

export const options = (nav) => {
    return {
        initialRouteName:"Dashboard",
        headerShown: true,
        headerRight: () => (
            <Ionicons name='menu-outline' size={50} color='white' 
            onPress={() => nav.toggleDrawer()} />
          ), 
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: 'tomato'},
          headerMode: 'screen',

    }
}

export const Authoptions = (nav) => {
    return {
        initialRouteName:"Dashboard",
        headerShown: true,
        headerRight: () => (
            <Ionicons name='information-circle' size={40} color='white' 
            onPress={() => alert("Please click the 'Get Started button' to continue")} />
          ), 
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: 'tomato'},
          headerMode: 'screen',

    }
}
  