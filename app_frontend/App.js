import React, { useContext, useState } from 'react';
import { AuthProvider } from './context/authContext';
import AppNav from './context/appNav';
import { TransactionProvider } from './context/transactionsContext';

const App = () => {

  return (
    <AuthProvider>
      <TransactionProvider>
          <AppNav />
      </TransactionProvider>
    </AuthProvider>
  )
}

export default App;
