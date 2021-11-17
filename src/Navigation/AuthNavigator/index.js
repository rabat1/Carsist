import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../Screens/Auth/Login';
import Register from '../../Screens/Auth/Register';

 
 const AuthNavigator=()=>{
    const AuthStack = createNativeStackNavigator();
    return(
<AuthStack.Navigator screenOptions={{headerShown:false}}>
<AuthStack.Screen name='login' component={Login}></AuthStack.Screen>
<AuthStack.Screen name='register' component={Register}></AuthStack.Screen>
   
</AuthStack.Navigator>
)
}
export default AuthNavigator;