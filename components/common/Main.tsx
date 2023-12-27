import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  version: string;
};

const Main = ({title, version}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.version}>{version}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  version: {
    fontSize: 12,
    color: 'gray',
  },
});

export default Main;
