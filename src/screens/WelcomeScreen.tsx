import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackNavigationParams} from '../config/types';
import ScreenWrapper from '../components/common/ScreenWrapper';
import {appName, colors} from '../config/constants';

type Props = NativeStackScreenProps<AppStackNavigationParams, 'Welcome'>;

export default function WelcomScreen({navigation}: Props) {
  const signIn = async () => {
    try {
      // signin
    } catch (error) {
      console.log('got error: ', error);
    }
  };
  return (
    <ScreenWrapper>
      <View className="h-full flex justify-around">
        <View className="flex-row justify-center mt-10">
          <Image
            // TODO: fix GIF
            source={require('../assets/logo.png')}
            className="h-80 w-80 rounded-full"
          />
        </View>

        <View className="mx-5 mb-20">
          <Text
            className={`text-center font-bold text-4xl ${colors.heading} mb-10`}>
            {appName}
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
            className="p-3 rounded-full mb-5"
            style={{backgroundColor: colors.button}}>
            <Text className="text-center text-white text-lg font-bold">
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            className="shadow p-3 rounded-full mb-5"
            style={{backgroundColor: colors.button}}>
            <Text className="text-center text-white text-lg font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => signIn()}
            className="shadow p-3 rounded-full bg-white">
            <View className="flex-row justify-center items-center space-x-3">
              <Image
                source={require('../assets/googleIcon.png')}
                className="h-8 w-8"
              />
              <Text className="text-center text-gray-600 text-lg font-bold">
                Sign In with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
