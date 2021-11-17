import React from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../../../Utils/Colors';
import Icon from '../../../Utils/Icon'
import styles from './style';


const SideMenu = ({navigation}) => {
    const menuItems=[
      {icon:<Icon color={Colors.primaryDark} type='material' name='home' size={22} />, name:'HomeTab', onPress:()=>{navigation.navigate('HomeTab')}},
        {icon:<Icon color={Colors.primaryDark} type='material' name='login' size={22} />, name:'Login', onPress:()=>{navigation.navigate('Login')}},
        {icon:<Icon color={Colors.primaryDark} type='material' name='enter' size={22} />, name:'Register', onPress:()=>{navigation.navigate('Register')}},
      
    ]
    return(
        <SafeAreaView>
             <View style={{marginTop:140,marginHorizontal:20}}>
                  {menuItems.map(({icon,name,onPress})=>
                (
                  <View key={name} style={styles.drawerContainer}>
                  <TouchableOpacity onPress={onPress} style={styles.item} >
                        {icon}
                        <Text style={styles.itemText}>{name}</Text>
                  </TouchableOpacity>
                  </View>
                )
               )}
               </View>

        </SafeAreaView>
    )
}

export default SideMenu
