import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/common/ScreenWrapper';
import BackButton from '../components/common/BackButton';
import {colors} from '../config/constants';
import Loading from '../components/common/Loading';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackNavigationParams} from '../config/types';
import {addDoc} from 'firebase/firestore';
import {firebaseTripsRef} from '../config/firebase';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import Snackbar from 'react-native-snackbar';

type Props = NativeStackScreenProps<AppStackNavigationParams, 'AddTrip'>;

export default function AddTripScreen({navigation}: Props) {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);

  const {user} = useSelector((state: RootState) => state.user);

  const handleAddTrip = async () => {
    if (city && country) {
      setLoading(true);
      let firebaseDoc = await addDoc(firebaseTripsRef, {
        city,
        country,
        userId: user.uid,
      });
      setLoading(false);
      if (firebaseDoc && firebaseDoc.id) {
        navigation.goBack();
      }
      navigation.navigate('Home');
    } else {
      Snackbar.show({
        text: 'City and Country are required',
        backgroundColor: colors.error,
      });
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
              Add Trip
            </Text>
          </View>

          <View className="flex-row justify-center my-3 mt-5">
            <Image className="h-56 w-56" source={require('../assets/4.png')} />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${colors.heading} text-lg font-bold`}>
              Which City On Earth?
            </Text>
            <TextInput
              value={city}
              onChangeText={value => setCity(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className={`${colors.heading} text-lg font-bold`}>
              Which Country
            </Text>
            <TextInput
              value={country}
              onChangeText={value => setCountry(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
          </View>
        </View>

        <View>
          {loading ? (
            <Loading />
          ) : (
            <TouchableOpacity
              onPress={handleAddTrip}
              style={{backgroundColor: colors.button}}
              className="my-6 rounded-full p-3 shadow-sm mx-2">
              <Text className="text-center text-white text-lg font-bold">
                Add Trip
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
}
