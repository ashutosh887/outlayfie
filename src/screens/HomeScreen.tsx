import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/common/ScreenWrapper';
import {appName} from '../config/constants';
import {sampleTrips} from '../config/data';
import randomImage from '../utils/randomImages';
import EmptyTripsList from '../components/home/EmptyTripsList';
import {AppStackNavigationParams} from '../config/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<AppStackNavigationParams, 'Home'>;

// @ts-ignore
const HomeScreen = ({navigation}: Props) => {
  return (
    <ScreenWrapper>
      <View className="flex-row justify-between items-center p-2 px-3">
        <Text className="text-2xl font-semibold">{appName.toUpperCase()}</Text>

        <TouchableOpacity
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
            data={sampleTrips}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            columnWrapperStyle={styles.flatListStyle}
            scrollEnabled={true}
            renderItem={({item}) => {
              const {id: tripID, city: tripCity, country: tripCountry} = item;
              return (
                <TouchableOpacity
                  className="rounded-lg bg-white my-2 p-2 py-3"
                  activeOpacity={0.5}
                  onPress={() =>
                    navigation.navigate('TripExpenses', {
                      id: tripID,
                      city: tripCity,
                      country: tripCountry,
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
