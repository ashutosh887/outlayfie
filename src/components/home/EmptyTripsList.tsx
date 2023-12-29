import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  message: string;
};

const EmptyTripsList = ({message}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/empty.png')} style={styles.image} />
      <Text>{message || 'Nothing to show...'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
});

export default EmptyTripsList;
