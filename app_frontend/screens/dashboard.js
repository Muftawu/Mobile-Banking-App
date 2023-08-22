import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CenterMenu, MenuItem } from '../components/actionItem';
import { AuthContext } from '../context/authContext';
import { ActivityIndicator } from 'react-native';

export const Dashboard = () => {

  const { userInfo } = useContext(AuthContext)
  const [account_username, setAccountUsername] = useState('')

  useEffect(() => {
    const username = userInfo.username
    setAccountUsername(username)
  }, [])

  
    return (
      <View style={styles.container}>

      {
      account_username ? <Text style={styles.welcomeText}>Welcome {account_username}</Text> : 
      <Text style={styles.welcomeText}>Welcome</Text>
      }

        <View style={styles.row}>
           <MenuItem name="Deposit" img={require("../assets/images/deposit.png")} />
           <MenuItem name="Withdrawal" img={require("../assets/images/withdraw.png")} />
        </View>

       <CenterMenu name="Quick Transfer"  img={require("../assets/images/quick_transfer.png")}/>

        <View style={styles.row}>
          <MenuItem name="Account Manager" img={require("../assets/images/account_manger.png")} />
          <MenuItem name="Transaction History" img={require("../assets/images/transaction-history.png")} />
        </View>

      </View> 
    )
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },

});

