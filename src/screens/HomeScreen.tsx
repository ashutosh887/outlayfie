import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenWrapper from '../components/common/ScreenWrapper';
import {appName, colors} from '../config/constants';
import randomImage from '../utils/randomImages';
import EmptyTripsList from '../components/home/EmptyTripsList';
import {AppStackNavigationParams, TRIP} from '../config/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {signOut} from 'firebase/auth';
import {firebaseAuth, firebaseTripsRef} from '../config/firebase';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../redux/slices/user';
import {RootState} from '../redux/store';
import {getDocs, query, where} from 'firebase/firestore';
import Snackbar from 'react-native-snackbar';
import {useIsFocused} from '@react-navigation/native';

type Props = NativeStackScreenProps<AppStackNavigationParams, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  const [trips, setTrips] = useState<TRIP[]>([]);

  const dispatch = useDispatch();

  const {user} = useSelector((state: RootState) => state.user);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchTrips();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  const fetchTrips = async () => {
    try {
      const firebaseQuery = query(
        firebaseTripsRef,
        where('userId', '==', user.uid),
      );
      const querySnapshot = await getDocs(firebaseQuery);

      let fetchedData: TRIP[] = [];

      querySnapshot.forEach(document => {
        const data = document.data();
        const id = document.id;
        if ('city' in data && 'country' in data) {
          const trip: TRIP = {
            id: id,
            city: data.city,
            country: data.country,
          };
          fetchedData.push(trip);
        } else {
          console.error(`Missing required fields in document with ID ${id}`);
        }
      });
      setTrips(fetchedData);
    } catch (error) {
      Snackbar.show({
        text: 'Unable to fetch Trips from Firebase',
        backgroundColor: colors.error,
      });
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(firebaseAuth);
      await AsyncStorage.clear();
      dispatch(setUser(null));
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  };

  return (
    <ScreenWrapper>
      <View className="flex-row justify-between items-center p-2 px-3">
        <Text className="text-2xl font-semibold">{appName.toUpperCase()}</Text>

        <TouchableOpacity
          onPress={handleLogout}
          activeOpacity={0.5}
          className="p-2 px-3 bg-white rounded-lg border border-gray-500">
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center justify-center w-full p-2 px-3">
        <Image
          source={require('../assets/banner.png')}
          className="h-56 w-full bg-blue-200 rounded-lg"
        />
      </View>

      <View className="flex flex-col">
        <View className="flex flex-row justify-between items-center p-2 px-3">
          <Text className="text-gray-500 font-medium text-lg">
            Recent Trips:
          </Text>

          <TouchableOpacity
            className="p-1 px-2 bg-white border border-gray-500 rounded-md"
            onPress={() => navigation.navigate('AddTrip')}>
            <Text className="text-xs">Add Trip +</Text>
          </TouchableOpacity>
        </View>

        <View className="px-3" style={styles.trips}>
          <FlatList
            data={trips}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            columnWrapperStyle={styles.flatListStyle}
            scrollEnabled={true}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  className="rounded-lg bg-white my-2 p-2 py-3"
                  activeOpacity={0.5}
                  onPress={() =>
                    navigation.navigate('TripExpenses', {
                      ...item,
                    })
                  }>
                  <Image source={randomImage()} className="h-40 w-40" />
                  <Text className="text-xl font-bold">{item.city}</Text>
                  <Text className="text-sm">{item.country}</Text>
                </TouchableOpacity>
              );
            }}
            ListEmptyComponent={
              <EmptyTripsList message="You haven't recorded any trips yet!" />
            }
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  trips: {
    height: 500,
  },
  flatListStyle: {
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
