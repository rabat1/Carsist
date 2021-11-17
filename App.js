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

const App= () => {
 //this will be required for pwd input
  // const [secureEntry,setEscureEntry] = React.useState(true);
  
  return (
    <>
    {/* <Input
    style={{}}
    label="Password"
    //don't give icon,icon position, secureEntryText if hidden show not required
    icon=
    {
    <TouchableOpacity onPress={()=>{setEscureEntry((prev)=> !prev)}}>
    <Text >{secureEntry?'show': 'hide'}</Text>
    </TouchableOpacity>
    }
    iconPosition='right'
    placeholder="Enter Password"
    secureTextEntry={secureEntry}
    //when make screen of login, 'onChange' function should be define there from there send here and set values from main screen
    //onChangeText={(value)=>onChange({name:'password', value})}
 /> */}
{/* 
<CustomButton 
title='submit'
//onSubmit will work when it is handled by main screen and send here from screen
//onPress={onSubmit}
//disabled={loading}
style={{width:'80%'}}
primary />
     */}


{/* <AppModal 
//modal visible and setVisible will be set by main screens
        modalVisible={true}
         title='Sort By'
         closeOnTouchOutside={false}
         //setModalVisible={setModalVisible}
          modalBody={
          <View>
          <Text>yeyey</Text>
         </View>}
         // modalFooter={<></>}
          /> */}
          {/* <Home /> */}
         <AuthLoading />
    </>

  );
};

export default App;
