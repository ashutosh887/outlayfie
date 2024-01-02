import {StatusBar} from 'react-native';
import React from 'react';

import type {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../config/constants';

type Props = PropsWithChildren<{}>;

const ScreenWrapper = ({children}: Props): React.JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={colors.heading} />
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;
