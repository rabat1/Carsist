import React from 'react'
import FuelTrackerEdit from '../../Screens/App/User/FuelTrackerEdit';
import FuelTracker from '../../Screens/App/User/FuelTracker';
import Expenses from '../../Screens/App/User/Expenses'
import Reminders from '../../Screens/App/User/Remiders'
import AddReminder from '../../Screens/App/User/AddReminder'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const ApplicationStack = createNativeStackNavigator();

export function FuelTrackStack() {
  return (
    <ApplicationStack.Navigator initialRouteName='fuelTracker'>
      <ApplicationStack.Screen name='fuelTracker' component={FuelTracker} options={{ headerShown: false }} />
      <ApplicationStack.Screen name='fuelTrackerEdit' component={FuelTrackerEdit} options={{ headerShown: false }} />

    </ApplicationStack.Navigator>
  )
}

export function ExpenseStack() {
  return (
    <ApplicationStack.Navigator initialRouteName='expenses'>
      <ApplicationStack.Screen name='expenses' component={Expenses} options={{ headerShown: false }} />

    </ApplicationStack.Navigator>
  )
}

export function ReminderStack() {
  return (
    <ApplicationStack.Navigator initialRouteName='reminders'>
      <ApplicationStack.Screen name='reminders' component={Reminders} options={{ headerShown: false }} />
      <ApplicationStack.Screen name='addReminder' component={AddReminder} options={{ headerShown: false }} />
    </ApplicationStack.Navigator>
  );
}
