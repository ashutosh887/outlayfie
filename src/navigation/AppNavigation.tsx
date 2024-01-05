import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import AddTripScreen from '../screens/AddTripScreen';
import AllTripsScreen from '../screens/AllTripsScreen';
import {AppStackNavigationParams} from '../config/types';
import TripExpensesScreen from '../screens/TripExpensesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {onAuthStateChanged} from 'firebase/auth';
import {firebaseAuth} from '../config/firebase';
import {setUser} from '../redux/slices/user';

const Stack = createNativeStackNavigator<AppStackNavigationParams>();

const AppNavigation = () => {
  const {user} = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();

  onAuthStateChanged(firebaseAuth, newUser => {
    if (newUser) {
      dispatch(setUser(newUser));
    } else {
      dispatch(setUser(null));
    }
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? 'Home' : 'Welcome'}
        screenOptions={{
          headerShown: false,
        }}>
        {user ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                animation: 'fade_from_bottom',
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
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                presentation: 'modal',
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{
                presentation: 'modal',
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
