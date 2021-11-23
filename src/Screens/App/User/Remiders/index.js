import React from 'react'
import { View, Text } from 'react-native'
import React, { useState } from 'react';
//import { Dimensions, TouchableOpacity, View } from 'react-native';
import { NativeBaseProvider, Box, Fab, Icon, Heading } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './styles'
import { CustomHeader } from '../../../../Navigation/CustomHeader'
import SwipeList from '../../../../Components/SwipeList/swipeList'
import DatePicker from '../../../../Components/Calendar/DatePicker'


const index = () => {
    const [mode, setMode] = useState('SwipeList');


    return (
        <NativeBaseProvider>
            <Box>
                <CustomHeader isHome={true} title='Reminders' />
            </Box>
            <Box bg="white" flex="1" safeAreaTop>
                <SwipeList />
                <DatePicker />
                <Box position='relative' h={100} w="100%">
                    <Fab
                        colorScheme="green"
                        position="absolute"
                        icon={<Icon size="full" color="white" as={<AntDesign name="plus" />} size="md" />}
                    />
                </Box>
            </Box>
        </NativeBaseProvider >
    )
}

export default index
