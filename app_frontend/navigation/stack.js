import { createStackNavigator } from '@react-navigation/stack';
import welcomeScreen from '../screens/welcome_screen';
import accountType from '../screens/account_type';
import loginScreen from '../screens/login';
import SignUpScreen from '../screens/signup';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {Dashboard} from '../screens/dashboard';
import { Authoptions, options } from '../components/stackHeader';
import { CustomerServiceScreen } from '../screens/customer_service_screen';
import { SettingsScreen } from '../screens/settings_screen';
import { DepositScreen } from '../screens/deposit_screen';
import { QuickTransferScreen } from '../screens/transfer_screen';
import { WithdrawalScreen } from '../screens/withdraw_screen';
import { AccountManagerScreen } from '../screens/account_manager_screen';
import { TransactionHistoryScreen } from '../screens/transaction_history_screen';
import { TransactionDetailScreen } from '../screens/transaction_detail_screen';
import { DepositHistoryScreen } from '../screens/deposit_history_screen';
import { WithdrawHistoryScreen } from '../screens/withdraw_history_screen';
import { TransferHistoryScreen } from '../screens/transfer_history_screen';

const Stack = createStackNavigator();

// Welcome, login, registration stack screen
export const AccountStack = () => {

  const navigation = useNavigation()
  return (
    <Stack.Navigator screenOptions={Authoptions(navigation)}>
      <Stack.Screen name="Welcome" component={welcomeScreen} />
      <Stack.Screen name="account_type" component={accountType} />
      <Stack.Screen name="Login" component={loginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

// Authenticated user screen
export const HomeStack = () => {
  const navigation = useNavigation()

  return (
    <Stack.Navigator screenOptions={options(navigation)}>
     <Stack.Screen name="Dashboard" component={Dashboard} />
     <Stack.Screen name="Deposit" component={DepositScreen} />
     <Stack.Screen name="Quick Transfer" component={QuickTransferScreen} />
     <Stack.Screen name="Withdrawal" component={WithdrawalScreen} />
     <Stack.Screen name="Account Manager" component={AccountManagerScreen} />
     <Stack.Screen name="Transaction History" component={TransactionHistoryScreen} />
     <Stack.Screen name="Transaction Details" component={TransactionDetailScreen} />
     <Stack.Screen name="Deposit History" component={DepositHistoryScreen} />
     <Stack.Screen name="Withdraw History" component={WithdrawHistoryScreen} />
     <Stack.Screen name="Transfer History" component={TransferHistoryScreen} />
    </Stack.Navigator>
  );
}


export const SettingsStack = () => {
  const navigation = useNavigation()

  return (
    <Stack.Navigator screenOptions={options(navigation)}>
     <Stack.Screen name="Setting" component={SettingsScreen} />

    </Stack.Navigator>
  );
}

export const CustomerServiceStack = () => {
  const navigation = useNavigation()

  return (
    <Stack.Navigator screenOptions={options(navigation)}>
     <Stack.Screen name="Customer Services" component={CustomerServiceScreen} />
    </Stack.Navigator>
  );
}

