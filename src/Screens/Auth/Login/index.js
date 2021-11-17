import React from 'react'
import { View, Text } from 'react-native'
import { CustomHeader } from '../../../Navigation/CustomHeader'
import { useNavigation, useFocusEffect } from '@react-navigation/core';

const index = () => {
    
    return (
        <View>
              <CustomHeader isHome={false} title='Login'  />
  
            <Text>Login</Text>
        </View>
    )
}

export default index
