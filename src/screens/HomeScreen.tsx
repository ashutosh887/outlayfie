import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/common/ScreenWrapper';
import {appName} from '../utils/config';

const HomeScreen = () => {
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
        <Text style={styles.tripsHeading}>Recent Trips:</Text>

        <TouchableOpacity style={styles.tripsTouchable}>
          <Text>Add Trip</Text>
        </TouchableOpacity>
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
  },
  logo: {
    height: 240,
    width: 360,
    margin: 12,
    backgroundColor: '#bfdbfe',
    borderRadius: 10,
  },
  tripsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
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
});

export default HomeScreen;
