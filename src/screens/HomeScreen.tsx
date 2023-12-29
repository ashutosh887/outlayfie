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

// @ts-ignore
const HomeScreen = ({navigation: {navigate}}) => {
  return (
    <ScreenWrapper style={styles.wrapper}>
      <View style={styles.navBarView}>
        <Text style={styles.appName}>{appName.toUpperCase()}</Text>

        <TouchableOpacity style={styles.touchable}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bannerView}>
        <Image source={require('../assets/banner.png')} style={styles.logo} />
      </View>

      <View style={styles.tripsView}>
        <View style={styles.tripsHeader}>
          <Text style={styles.tripsHeading}>Recent Trips:</Text>

          <TouchableOpacity
            style={styles.tripsTouchable}
            onPress={() => navigate('AddTrip')}>
            <Text style={styles.tripAdd}>Add Trip</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.trips}>
          <FlatList
            data={sampleTrips}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            columnWrapperStyle={styles.flatListStyle}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={styles.tripTouchable}
                  activeOpacity={0.5}>
                  <View style={styles.tripCard}>
                    <Image source={randomImage()} style={styles.tripImage} />
                    <Text style={styles.city}>{item.city}</Text>
                    <Text style={styles.country}>{item.country}</Text>
                  </View>
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
  wrapper: {
    flex: 1,
  },
  navBarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    padding: 12,
  },
  appName: {
    fontWeight: '700',
    fontSize: 24,
  },
  touchable: {
    padding: 6,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  bannerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 240,
    width: 366,
    margin: 12,
    backgroundColor: '#bfdbfe',
    borderRadius: 10,
  },
  tripsView: {
    padding: 12,
  },
  trips: {
    height: 450,
  },
  tripsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  tripsHeading: {
    color: 'gray',
    fontWeight: '500',
    fontSize: 18,
  },
  tripsTouchable: {
    padding: 6,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
  },
  tripAdd: {
    fontSize: 12,
  },
  flatListStyle: {
    justifyContent: 'space-between',
  },
  tripTouchable: {
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  tripCard: {},
  tripImage: {
    height: 160,
    width: 160,
  },
  city: {
    fontSize: 18,
    fontWeight: '700',
  },
  country: {
    fontSize: 14,
  },
});

export default HomeScreen;
