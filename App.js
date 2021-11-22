/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Text,TouchableOpacity,View} from 'react-native';
import Input from './src/Components/Input';
import CustomButton from './src/Components/CustomButton';
import AppModal from './src/Components/AppModal';
import Expenses from './src/Screens/App/User/Expenses';
import AuthLoading from './src/Navigation';
import { NativeBaseProvider } from 'native-base';

const App= () => {
  
  return (
    <>
    <NativeBaseProvider>
         <AuthLoading />
    </NativeBaseProvider>
    </>

  );
};

export default App;
