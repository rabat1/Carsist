// import { Alert, Button, Text, Box, Modal, CloseIcon, HStack } from 'native-base';
// import React, { useState } from 'react';
// import DatePicker from 'react-native-modern-datepicker';
// import Colors from '../../Utils/Colors';

// const index = (props) => {
//   const [date, setDate] = useState('');
//   const [isDateVisible, setIsDateVisible] = useState(false);
//   const showDatePicker = () => {
//     setIsDateVisible(true);
//   }
//   const hideDatePicker = () => {
//     setIsDateVisible(false);
//   }
//   const datePickerHandler = (date) => {
//     var currDate = Date.now();
//     if (selectedDate < currDate) {
//       <Alert alignSelf="center" w="50%" status="error" colorScheme="error">
//         <HStack>
//           <Alert.Icon />
//           <CloseIcon />
//         </HStack>
//         <Text fontSize="md" fontWeight="medium" color="coolGray.800">
//           Choose future date!
//         </Text>
//       </Alert>
//       hideDatePicker();
//       return;
//     }
//     hideDatePicker();
//   }
//   return (

//     <DatePicker
//       options={{
//         backgroundColor: Colors.light,
//         textHeaderColor: Colors.secondary,
//         textDefaultColor: '#F6E7C1',
//         selectedTextColor: '#fff',
//         mainColor: Colors.primaryDark,
//         textSecondaryColor: '#2071B2',
//       }}
//       current="2021-11-25"
//       selected={date}
//       onSelectedChange={setDate, props.date}
//       mode="calendar"
//       minuteInterval={30}
//       style={{ borderRadius: 10 }}
//     />

//   );
// };
// export default index
import React, { useState } from 'react';
import { View, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

const index = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };



  return (
    <View>
      <View>
        <TouchableOpacity onPress={showDatepicker}><Text>Show date picker</Text></TouchableOpacity>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
export default index