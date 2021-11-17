import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {connect} from 'react-redux';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const AuthLoading = props => {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <NavigationContainer>
      {isSignedIn ? <DrawerNavigator></DrawerNavigator> : <AuthNavigator></AuthNavigator>}
    </NavigationContainer>
  );
};

export default AuthLoading;
