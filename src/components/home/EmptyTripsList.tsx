import {Image, Text, View} from 'react-native';
import React from 'react';

type Props = {
  message: string;
};

const EmptyTripsList = ({message}: Props) => {
  return (
    <View className="flex justify-center items-center h-80">
      <Image source={require('../../assets/empty.png')} className="h-48 w-48" />
      <Text>{message || 'Nothing to show...'}</Text>
    </View>
  );
};

export default EmptyTripsList;
