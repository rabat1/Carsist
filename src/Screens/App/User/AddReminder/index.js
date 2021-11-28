import React, { useState } from 'react'
import { View } from 'react-native'
import { NativeBaseProvider, Box, Alert, Text, Modal, Button } from 'native-base'
import { CustomHeader } from '../../../../Navigation/CustomHeader'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../../../Utils/Colors';
import DateTimePicker from '@react-native-community/datetimepicker'

const index = () => {
  const [date, setDate] = useState(new Date(1637866800000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log(date);
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <NativeBaseProvider>
      <Box>
        <CustomHeader title='Add Reminder'>Add Reminder</CustomHeader>
        <Box>
          <TouchableOpacity onPress={showDatepicker}>
            <Text>9.00AM</Text>
            <Text fontSize="xs">Date</Text>
          </TouchableOpacity>
        </Box>
        <View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="spinner"
              onChange={onChange}
            />
          )}
        </View>
        {/* <Modal isOpen={showDatePicker} onClose={() => setIsDateVisible(false)}> */}

        {/* </Modal> */}
      </Box>
    </NativeBaseProvider>

  )
};
export default index