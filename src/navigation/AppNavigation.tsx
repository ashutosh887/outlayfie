import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import AddTripScreen from '../screens/AddTripScreen';
import AllTripsScreen from '../screens/AllTripsScreen';
import {AppStackNavigationParams} from '../config/types';
import TripExpensesScreen from '../screens/TripExpenses';

const Stack = createNativeStackNavigator<AppStackNavigationParams>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            animation: 'fade_from_bottom',
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="AddExpense"
          component={AddExpenseScreen}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="AddTrip"
          component={AddTripScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="TripExpenses"
          component={TripExpensesScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="AllTrips"
          component={AllTripsScreen}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
