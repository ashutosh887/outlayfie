import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';

import type {PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

const ScreenWrapper = ({children, style}: Props): React.JSX.Element => {
  // const statusBarHeight = StatusBar.currentHeight
  //   ? StatusBar.currentHeight
  //   : Platform.OS === 'ios'
  //   ? 30
  //   : 0;

  return <View style={style}>{children}</View>;
};

export default ScreenWrapper;
