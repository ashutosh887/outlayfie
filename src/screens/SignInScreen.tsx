import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/common/ScreenWrapper';
import {colors} from '../config/constants';
import BackButton from '../components/common/BackButton';
import Loading from '../components/common/Loading';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackNavigationParams} from '../config/types';

type Props = NativeStackScreenProps<AppStackNavigationParams, 'SignIn'>;

export default function SignInScreen({navigation}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userLoading, setUserLoading] = useState(false);

  const handleSubmit = async () => {
    if (email && password) {
      // good to go
      navigation.goBack();
      navigation.navigate('Home');
      setUserLoading(false);
    }
  };

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative mt-5">
            <View className="absolute top-0 left-0 z-10">
              <BackButton />
            </View>

            <Text className={`${colors.heading} text-xl font-bold text-center`}>
              Sign In
            </Text>
          </View>

          <View className="flex-row justify-center my-3 mt-5">
            <Image
              className="h-56 w-56"
              source={require('../assets/login.png')}
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${colors.heading} text-lg font-bold`}>Email</Text>
            <TextInput
              value={email}
              onChangeText={value => setEmail(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className={`${colors.heading} text-lg font-bold`}>
              Password
            </Text>
            <TextInput
              value={password}
              secureTextEntry
              onChangeText={value => setPassword(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <TouchableOpacity className="flex-row justify-end">
              <Text>Forget Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          {userLoading ? (
            <Loading />
          ) : (
            <TouchableOpacity
              onPress={handleSubmit}
              style={{backgroundColor: colors.button}}
              className="my-6 rounded-full p-3 shadow-sm mx-2">
              <Text className="text-center text-white text-lg font-bold">
                Sign In
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
}
